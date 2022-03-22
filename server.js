const express = require("express");
const path = require("path");
const app = express();
const _path = path.join(__dirname, "./");
app.use("/", express.static(_path));
app.listen(8888, () => {
  console.log("lazy Image server: 8888시작 http://127.0.0.1:8888");
});
