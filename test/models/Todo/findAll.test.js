const assert = require("power-assert");
const Todo = require("../../../models/Todo");

describe("Todo.findAll MethodsTest", () => {
  it("hoge", () => {
    const todos = Todo.findAll();

    console.log(todos, "@@@@@@@@@@");
  });
});

// ファイルインポートしてfindAll()関数でデータを取得して変数化
