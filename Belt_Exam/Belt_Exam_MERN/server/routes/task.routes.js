const TaskController = require("../controllers/task.controller");

module.exports = app => {
  app.get("/api/tasks/", TaskController.findAllTasks);
  app.get("/api/tasks/:id", TaskController.findOneSingleTask);
  app.put("/api/tasks/update/:id", TaskController.updateExistingTask);
  app.put("/api/tasks/updateStatus/:id", TaskController.updateExistingTaskStatus);
  app.post("/api/tasks/new", TaskController.createNewTask);
  app.delete("/api/tasks/delete/:id", TaskController.deleteAnExistingTask);
};