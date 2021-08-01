const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name cannot be emtpy"],
		minlength: [6, "The min length should be more than 6"]
	},
	age: {
		type: Number,
		required: [true, "Age cannot be emtpy"],
		min: [18, "Age should be more than 18"]
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;