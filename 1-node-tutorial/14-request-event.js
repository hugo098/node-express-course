const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome to our home page");
// });

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome to our home page");
});

server.listen(5000);
