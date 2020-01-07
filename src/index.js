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
    if (!req.query.subreddit || req.query.subreddit === "") res.status(500).send("Cannot input empty subreddit name.");

    const sw = helperFunctions.createSnoowrap({
        userAgent: process.env.USER_AGENT,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      });


    sw.getSubreddit(req.query.subreddit).getHot({limit: 100}).then(function(data) {
            if (data.length === 0) res.status(500).send("No data in this subreddit.");

            var results = [];
            data.forEach((element) => {
                var dict = {};        
                var words = helperFunctions.titleBreakdown(element.title);

                words.forEach(word => {
                    if (dict[word] === undefined) dict[word] = 1;
                    else dict[word]++;
                });

                Object.keys(dict).forEach(key =>
                    results.push({
                        text: key,
                        value: dict[key],
                    })
                );

            });
            res.send(results);
    }).catch((e) => {
        res.status(e.statusCode).send(e.message);
    });

});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);