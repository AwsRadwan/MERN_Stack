const Task = require("../models/task.model");

module.exports.findAllTasks = (req, res) => {
  Task.find()
    .then(allDaTasks => res.json({ Tasks: allDaTasks }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleTask = (req, res) => {
	Task.findOne({ _id: req.params.id })
		.then(oneSingleTask => res.json({ Task: oneSingleTask }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewTask = (req, res) => {
  Task.create(req.body)
    .then(newlyCreatedTask => res.json(newlyCreatedTask))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingTask = (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedTask => res.json({ Task: updatedTask }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingTask = (req, res) => {
  Task.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingTaskStatus = (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.id }, {status: req.body.status}, { new: true })
    .then(updatedTask => res.json({ Task: updatedTask }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};