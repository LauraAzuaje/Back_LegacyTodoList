const router = require("express").Router();
const Todo = require("../models/Todo");

//endpoint get
router.get("/", async (req, res) => {
  const result = await Todo.find();
  try {
    res.send(result);
  } 
	catch (error) {
    res.status(500).send(error);
  }
});

//endpoint post
router.post("/", (req, res) => {
  Todo.create(req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

//endpoint put
router.put("/:id", (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, result) => {
      if (err) throw new Error(err);
      res.json(result);
    }
  );
});

//endpoint delete
router.delete("/:id", (req, res) => {
  Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) throw new Error(err);
    res.end();
  });
});

module.exports = router;
