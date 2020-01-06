var cors = require('cors');
var express = require('express');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/GetRedditTitles', (req, res) => {
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);