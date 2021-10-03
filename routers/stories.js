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

module.exports = router;
