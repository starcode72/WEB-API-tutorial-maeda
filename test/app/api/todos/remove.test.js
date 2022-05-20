const assert = require("power-assert");
const Todo = require("../../../../models/Todo");

describe("Todo.remove", () => {
  //  14行目が動けば確認不要なので記述も不要
  it("Todo.removeはメソッドである", () => {
    assert.equal(typeof Todo.remove === "function", true);
  });

  it("メソッド実行時、引数idの値が1以上の数値出ないとエラーになる", () => {
    const invalidIdList = [0, -1, null, {}, [], "1"];

    invalidIdList.forEach((id) => {
      try {
        Todo.remove(id);
        assert.fail();
      } catch (error) {
        assert.equal(error.message, "idは必須です(1以上の数値)");
      }
    });
  });

  // 正常系テスト
  it("メソッドの実行時、正しいidを渡すとidに該当するTodoを削除", () => {
    const oldTodos = Todo.findAll();
    const existedId = 3;

    const removedTodo = Todo.remove(existedId);
    assert.deepEqual(removedTodo, {
      id: existedId,
      title: removedTodo.title,
      body: removedTodo.body,
      createdAt: removedTodo.createdAt,
      updatedAt: removedTodo.updatedAt,
    });

    const currentTodos = Todo.findAll();
    assert.equal(
      oldTodos.length,
      currentTodos.length + 1,
      "Todo.removeメソッドが成功した後はtodosの件数が1件少なくなるので、-1"
    );
  });
});
