// const express = require("express");
// const app = express();
// const todosRouter = require("./routers/todos");
// 外部に切り出した app.jsをrequireインポート
const app = require('./app')
const PORT = 8080;

// app.use("/api/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// index.js元の形
// const express = require("express");
// const app = express();
// const todosRouter = require("./routers/todos");
// const PORT = 8080;

// app.use("/api/todos", todosRouter);

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });
