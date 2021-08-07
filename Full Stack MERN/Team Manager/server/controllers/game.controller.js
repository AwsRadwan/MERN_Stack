const Game = require("../models/game.model");

module.exports.findAllGames = (req, res) => {
    Game.find()
    .then(allDaGames => res.json({ Games: allDaGames }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleGame = (req, res) => {
	Game.findOne({ _id: req.params.id })
		.then(oneSingleGame => res.json({ Game: oneSingleGame }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewGame = (req, res) => {
    Game.create(req.body)
    .then(newlyCreatedGame => res.json({ Game: newlyCreatedGame }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingGame = (req, res) => {
    Game.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedGame => res.json({ Game: updatedGame }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingGame = (req, res) => {
    Game.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.addPlayerToGame = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, { $push: { games: req.body.id } }, { new: true })
        .then(updatedPlayer => res.json({ Player: updatedPlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
