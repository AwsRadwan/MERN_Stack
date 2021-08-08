const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const TaskSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "Project Name is required !!"],
        minlength: [3, "Project Can't be less than 3"],
		unique: [true, "Name Must Be Unique !!"]
    },
	date: {
		type: Date,
		required: [true, "Due Date is required !!"],
		min: [Date.now, "Date Can't Be in Past"]
	},
	status: {
		type: String,
		default: "Backlog"
	}
}, { timestamps: true, collection: 'Tasks' });
TaskSchema.plugin(uniqueValidator);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;