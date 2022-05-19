const assert = require("power-assert");
const Todo = require("../../../models/Todo");

describe("Todo.create", () => {
  it("Todo.createはメソッドである", () => {
    assert.equal(typeof Todo.create === "function", true);
  });

  // ①意図的なtitleを含まない例外用エラーテスト
  it("メソッド実行後、引数にtitleプロパティを含むオブジェクトがないとエラーになる", () => {
    const dataList = [
      {}, // empty data
      { body: "詳細分" }, // no title
    ];
    dataList.forEach((data) => {
      try {
        Todo.create(data);
        assert.fail();
      } catch (error) {
        assert.equal(error.message, "titleは必須です");
      }
    });
  });
});
// ②意図的なbodyを含まないエラーテスト
it("メソッド実行時、引数にbodyプロパティを含むオブジェクトがないとエラーになる", () => {
  try {
    Todo.create({ title: "タイトル" });
    assert.fail();
  } catch (error) {
    assert.equal(error.message, "bodyは必須です");
  }
});

// ③正しいデータを渡した場合の通常の成功用テスト
it("メソッド実行時、正しい引数を渡すと新規にTodoデータ制作して、作成したTodoを返す", () => {
  const oldTodos = Todo.findAll();
  const data = {
    title: "dummy title",
    body: "dummy body",
  };

  const createdTodo = Todo.create(data);
  assert.deepEqual(createdTodo, {
    id: createdTodo.id,
    title: data.title,
    body: data.body,
    createdAt: createdTodo.createdAt,
    updatedAt: createdTodo.updatedAt,
  });

  const currentTotdos = Todo.findAll();
  assert.equal(oldTodos.length + 1, currentTotdos.length);
});
