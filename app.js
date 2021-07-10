const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.write("Hello Node!!");
  res.end();
});

server.listen(port, (err) => {
  if (err) {
    console.log("Soemthing went wrong", err);
  } else {
    console.log("Server is listening at " + 3000);
  }
});
