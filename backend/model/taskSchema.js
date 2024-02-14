
const mongoose = require("mongoose");

const taskListSchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    task: { type: mongoose.Schema.Types.Mixed },

    pin: { type: Number },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskListSchema);
module.exports = Task;
