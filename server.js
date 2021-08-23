const fs = require("fs");
const path = require("path");
const express = require("express");

const Logger = require("./logger");

const app = express();
const port = 3000;
const logger = new Logger();

let QueryData;
logger.on("message", (data) => {
  console.log(data);
  QueryData = { ...data };
  fs.appendFileSync(
    path.join(__dirname, "hello1.txt"),
    data.uid + " " + data.msg + " " + data.id + `\n`,
    (err) => {
      if (err) throw err;
      console.log("file written to...");
    }
  );
});

let id = 0;
setInterval(() => {
  id++;
  logger.log("Hello World", id);
}, 3000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
