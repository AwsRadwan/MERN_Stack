const mongoose = require("mongoose");
const Game = require("./game.model");

const PlayerSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "Name is required !!"],
        minlength: [3, "Name Can't be less than 3"],
		unique: true
    },
	position: {
		type: String,
		required: [true, "Name is required !!"],
		minlength: [3, "Name Can't be less than 3"],
		// enum: ["Forword", "Midfielder", "Goolkeeper", "Defense", null],
		// default: null
	},
	status: {
		type: String,
		// enum: ["Playing", "Not Playing", "Undecided", null],
		// default: "Undecided"
	},
	games: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "game.model"
		}
	]
}, { timestamps: true, collection: 'Players' });

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;