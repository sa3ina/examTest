const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
require("./config/db");
app.use(cors());
const router = require("../Backend/routes/Routes");
app.use(express.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
