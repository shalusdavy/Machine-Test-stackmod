
const task= require("./model/taskSchema");




exports.createTask = async (req, res) => {
    try {
        
        const taskManager = await task.create(req.body);
        res.status(200).json({success: true, data: task});
        console.log(taskManager);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, err: err.message });
    }
};




exports.getTasks = async (req, res) => {
  try {
    const tasks = await task.find();
    res.status(200).json({ success: true, data: tasks });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};


exports.deleteTask = async (req, res) => {
  try {
    const task = await task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, error: 'Task not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
