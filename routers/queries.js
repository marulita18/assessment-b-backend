const { Router } = require("express");
const Space = require("../models").space;
const Stories = require("../models").story;

const router = new Router();

router.get("/", async (req, res, next) => {
  const allSpaces = await Space.findAll();
  res.send(allSpaces);
});

module.exports = router;
