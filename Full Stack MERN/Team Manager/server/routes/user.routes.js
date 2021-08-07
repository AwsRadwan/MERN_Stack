const PlayerController = require("../controllers/player.controller");
const GameController = require("../controllers/game.controller");

module.exports = app => {
  app.get("/api/players/", PlayerController.findAllPlayers);
  app.get("/api/players/:id", PlayerController.findOneSinglePlayer);
  app.put("/api/players/update/:id", PlayerController.updateExistingPlayer);
  app.put("/api/player/status/:id", PlayerController.updateExistingPlayerStatus);
  app.put("/api/player/:id", PlayerController.addGameToPlayer);
  app.post("/api/players/new", PlayerController.createNewPlayer);
  app.delete("/api/players/delete/:id", PlayerController.deleteAnExistingPlayer);

  app.get("/api/games/", GameController.findAllGames);
  app.get("/api/games/:id", GameController.findOneSingleGame);
  app.put("/api/games/update/:id", GameController.updateExistingGame);
  app.post("/api/games/new", GameController.createNewGame);
  app.delete("/api/games/delete/:id", GameController.deleteAnExistingGame);
};