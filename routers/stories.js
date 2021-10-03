const auth = require("../auth/middleware");
const { Router } = require("express");
const Story = require("../models").story;

const router = new Router();

router.delete("/:id", async (req, res, next) => {
  try {
    const storyId = parseInt(req.params.id);
    const storyToDelete = await Story.findByPk(storyId);
    console.log("storytodelete", storyToDelete);
    if (!storyToDelete) {
      return res.status(404).send({ message: "Story not found" });
    }
    storyToDelete.destroy();
    res.status(204).send({ message: "Story deleted" });
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    const { name, content, imageUrl, spaceId } = req.body;
    if (!name || !content || !imageUrl || !spaceId) {
      return res
        .status(400)
        .send({ message: "Please add the correct information" });
    }
    const newStory = await Story.create({
      name,
      content,
      imageUrl,
      spaceId,
    });
    res.status(201).send(newStory);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
