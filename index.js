const express = require("express");
const app = express();
const PORT = 8080;
const todosRouter = require("./routers/todos");

app.use("/api/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
