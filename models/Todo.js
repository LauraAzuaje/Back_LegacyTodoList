const mongoose = require("mongoose");


const TodoSchema = new mongoose.Schema(
    {
        title: String,
        completed: Boolean,
        deleted: Boolean,
    },
    { versionKey: false }
);


module.exports = mongoose.model("todo", TodoSchema); 