const mongoose = require("mongoose");

const Authors = new mongoose.Schema({
	name: {
		type: String,
		require: [true, "Name is required!"],
		minlength: [3, "Name can't be less than 3 characters!"],
		maxlength: [17, "Name can't be grater than 17 characters!"]
	},
}, { timestamps: true, collection: 'Authors' });

const Author = mongoose.model("Author", Authors);

module.exports = Author;