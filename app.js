const express = require("express");
const todosRouter = require("./routers/todos");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api/todos", todosRouter);

module.exports = app;
