const { Router } = require("express");
const Space = require("../models").space;
const Stories = require("../models").story;

const router = new Router();

router.get("/", async (req, res, next) => {
  const allSpaces = await Space.findAll();
  res.send(allSpaces);
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const spaceById = await Space.findByPk(id, {
      include: [Stories],
    });
    if (!spaceById) {
      return res.status(404).send("Space not found");
    }
    res.send(spaceById);
    console.log(spaceById);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
