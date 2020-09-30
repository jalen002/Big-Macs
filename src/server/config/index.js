const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  port_to_use: process.env.PORT_TO_USE
};