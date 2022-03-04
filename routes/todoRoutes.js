const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  const result = await Todo.find();
  try {
    res.send(result);
  } 
	catch (error) {
    res.status(500).send(error);
  }
});

router.post("/",async (req, res) => {
  try {
		const todo = Todo(req.body);
		await todo.create();
	}
	catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
	try {
		const result = await Todo.findOneAndUpdate(
			{_id: req.params.id},
			req.body,
			{new: true},
  	);
		res.send(result);
	}
	catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
	try {
		const result = await Todo.findOneAndUpdate(
			{_id: req.params.id},
			req.body,
			{new: true},
		);
		res.send(result);
	}
	catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
