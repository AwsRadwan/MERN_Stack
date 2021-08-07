const mongoose = require("mongoose");
const Player = require("./player.model");

const GameSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "Name is required !!"],
        minlength: [3, "Name Can't be less than 3"],
        unique: true
    },
	players: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "player.model"
        }
    ]
}, { timestamps: true, collection: 'Games' });

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;