const express = require("express");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");
var prepend = require("prepend");

const Logger = require("./logger");

const app = express();
const logger = new Logger();

const port = 4000;

// Logger Calling

let msg = 0;
setInterval(() => {
  msg++;
  logger.log(msg);
}, 3000);

//  Storing Data in File

logger.on("message", (data) => {
  console.log(data);
  Data = { ...data };
  prepend("loggerData.txt", data.id + " " + data.msg, function (error) {
    if (error) console.error(error.message);
  });
});

let httpServer = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  const wss = new WebSocket.Server({ server: httpServer });

  wss.on("connection", function connection(ws) {
    console.log("A new client is connected");

    fs.watch(
      "loggerData.txt",
      { encoding: "buffer" },
      (eventType, filename) => {
        if (eventType !== "change") return;
        var lineReader = require("readline").createInterface({
          input: require("fs").createReadStream("loggerData.txt"),
        });

        var lineCounter = 0;
        var wantedLines = [];
        lineReader.on("line", function (line) {
          lineCounter++;
          wantedLines.push(line);
          if (lineCounter == 10) {
            lineReader.close();
          }
        });
        lineReader.on("close", function () {
          ws.send(JSON.stringify(wantedLines));
        });
      }
    );

    ws.on("message", function incoming(message) {
      console.log("received %s", message);
      ws.send("Got your message its", message);
    });

    ws.on("close", function close() {
      console.log("Client has disconnected");
    });
  });

  app.get("/log", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
});
