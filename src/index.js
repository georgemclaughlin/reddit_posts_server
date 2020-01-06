var cors = require('cors');
var express = require('express');
var helperFunctions = require('./helperFunctions/index');

require('dotenv').config();


const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/GetRedditTitles', (req, res) => {
    if (!req.query.subreddit || req.query.subreddit === "") throw new Error("Cannot input empty subreddit name.");

    const sw = helperFunctions.createSnoowrap({
        userAgent: process.env.USER_AGENT,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      });


    sw.getSubreddit(req.query.subreddit).getHot({limit: 100}).then(function(data) {
        var results = {};        
        data.forEach((element) => {
            var words = helperFunctions.titleBreakdown(element.title);

            words.forEach(word => {
                if (results[word] === undefined) results[word] = 1;
                else results[word]++;
            })

        });
        res.send(results);
    });

});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);