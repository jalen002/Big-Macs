require('dotenv').config({ path: '.env.local' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(async (req, res, next) => {
  try {
    next();
  } catch (error) {
    next(error.message);
  }
});

const port = process.env.SERVER_PORT || 3001;


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});