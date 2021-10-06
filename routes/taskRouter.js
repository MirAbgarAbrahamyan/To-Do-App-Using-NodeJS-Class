const express = require("express");
const taskController = require("../controller/taskController.js");
const taskRouter = express.Router();

taskRouter.get("/", taskController.getTasks);
taskRouter.post("/", taskController.addTask);
taskRouter.put("/:id", taskController.updateTask);
taskRouter.delete("/:id", taskController.deleteTask);

module.exports = taskRouter;
