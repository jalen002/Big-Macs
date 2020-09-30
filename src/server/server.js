const http = require('http');
const app = require('./app');
const { port_to_use } = require('./config');

 
const server = http.createServer(app);
 
server.listen(port_to_use);