const Player = require("../models/player.model");

module.exports.findAllPlayers = (req, res) => {
  Player.find()
    .then(allDaPlayers => res.json({ Players: allDaPlayers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSinglePlayer = (req, res) => {
	Player.findOne({ _id: req.params.id })
		.then(oneSinglePlayer => res.json({ Player: oneSinglePlayer }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPlayer = (req, res) => {
  Player.create(req.body)
    .then(newlyCreatedPlayer => res.json({ Player: newlyCreatedPlayer }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPlayer = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedPlayer => res.json({ Player: updatedPlayer }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPlayerStatus = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.id }, {status: req.body.status}, { new: true })
    .then(updatedPlayer => res.json({ Player: updatedPlayer }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.addGameToPlayer = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.id }, { $push: { games: req.body.id } }, { new: true })
    .then(updatedPlayer => res.json({ Player: updatedPlayer }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// const addGameToPlayer = function(gameId, tag) {
//   return db.Tutorial.findByIdAndUpdate(
//     tutorialId,
//     { $push: { tags: tag._id } },
//     { new: true, useFindAndModify: false }
//   );
// };
