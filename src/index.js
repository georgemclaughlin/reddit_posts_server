var cors = require('cors');
var express = require('express');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/GetRedditTitles', (req, res) => {
    if (!req.query.subreddit || req.query.subreddit === "") throw new Error("Cannot input empty subreddit name.");

    // An example url input is: http://localhost:3001/GetRedditTitles?subreddit=all
    res.send(`The subreddit you input in the url is: ${req.query.subreddit}`);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);