const express = require("express");
const Controller = require("../controller/Controller");
const router = express.Router();
router.get("/posts", Controller.getall);
router.delete("/posts/:id", Controller.deletePost);
router.get("/posts/:id", Controller.getById);
router.post("/posts", Controller.postNew);

module.exports = router;
