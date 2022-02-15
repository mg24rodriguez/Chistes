const UserController = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/jokes/", UserController.findAllJoke);
  app.get("/api/jokes/:id", UserController.findOneSingleJoke);
  app.put("/api/jokes/update/:id", UserController.updateExistingJoke);
  app.post("/api/jokes/new", UserController.createNewJoke);
  app.delete("/api/jokes/delete/:id", UserController.deleteAnExistingJoke);
};