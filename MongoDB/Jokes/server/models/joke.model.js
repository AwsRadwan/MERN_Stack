const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "This field can't be null"],
		maxlength: [10, "setup length can't be less than 10"]
	},
	punchline: {
		type: String,
		required: [true, "This field can't be null"],
		maxlength: [3, "punchline length can't be less than 3"]
	}
},
{
	collection: 'aws_db'
}
);

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;