const assert = require("power-assert");
const Todo = require("../../../models/Todo");

describe("Todo.findAll MethodsTest", () => {
  it("hoge", () => {
    const todos = Todo.findAll();
    assert.equal(Array.isArray(todos), true);
    assert.equal(todos.length > 0, true);
    todos.forEach((todo) => {
      //参照値でのテスト
      assert.deepEqual(todo, {
        id: todo.id,
        title: todo.title,
        body: todo.body,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
      });
      // スプレッド演算子バージョン (より厳格なテスト)
      // assert.deepStrictEqual({ ...todo}, {
      //   id: todo.id,
      //   title: todo.title,
      //   body: todo.body,
      //   createdAt: todo.createdAt,
      //   updatedAt: todo.updatedAt,
      // });
    });

    console.log(todos, "@@@@@@@@@@");
  });
});

// ファイルインポートしてfindAll()関数でデータを取得して変数化
