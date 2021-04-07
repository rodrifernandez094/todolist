const express = require("express");
const {
  getTodos,
  paginateTodos,
  createTodos,
  deleteTodos,
} = require("../controllers/todoControllers");
const router = express.Router();

//   routes

router.get("/", getTodos);

router.get("/:page", paginateTodos);

router.post("/", createTodos);

router.delete("/:id", deleteTodos);

module.exports = router;
