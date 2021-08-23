var childProcess = require("child_process");

const express = require("express");
const app = express();
const port = 3000;

// Browser Open
// localhost:3000/start?browser=chrome&url=google.com

app.get("/start", (req, res) => {
  var browser = req.query.browser;
  var url = req.query.url;
  childProcess.exec(
    `start ${browser}.exe ${url}`,
    function (err, stdout, stderr) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
      // process.exit(0);
    }
  );
  res.send("Opened Browser");
});

// Browser Stop
// localhost:3000/stop?browser=chrome

app.get("/stop", (req, res) => {
  var browser = req.query.browser;
  childProcess.exec(
    `Taskkill /IM ${browser}.exe /F`,
    function (err, stdout, stderr) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
      // process.exit(0);
    }
  );
  res.send("Closed Browser");
});

// Browser Cleanup
// localhost:3000/cleanup?browser=chrome

app.get("/cleanup", (req, res) => {
  var browser = req.query.browser;
  var command = browser === 'chrome' ? 'start Chrome_Cleanup.bat' : 'start Firefox_Cleanup.bat';
  childProcess.exec(
    command,
    function (err, stdout, stderr) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
      // process.exit(0);
    }
  );
  res.send("Cleaned up Browser");
});

// childProcess.exec(
//   "start test.bat",
//   function (err, stdout, stderr) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(stdout);
//     process.exit(0);
//   }
// );

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
