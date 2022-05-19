const assert = require("power-assert");
const { create } = require("../../../../models/Todo");
const requestHelper = require("../../../helper/requestHelper");

// データ１件新規作成時の前後で
// データ数が変わっていることを確認するために
// データ取得APIを実行する関数を実装
const getTodos = async () => {
  const response = await requestHelper.request({
    method: "get",
    endPoint: "/api/todos",
    statusCode: 200,
  });

  return response.body;
};

// 送信するデータにtitleが含まれていない時
// 「ステータスコード400」で
// 「titleは必須です」というエラーメッセージが返ってくることをテストする

// 異常テスト
describe("test 「POST /api/todos」", () => {
  it("titleを送らなかったら400エラーが返る", async () => {
    const postData = { body: "test body" };

    const response = await requestHelper
      .request({
        method: "post",
        endPoint: "/api/todos",
        statusCode: 400,
      })
      .send(postData);

    assert.deepEqual(response.body, {
      message: "titleは必須です",
    });
  });
});

// 正常系テスト

// 既存データが配列で返る
it("title, bodyを送ったら成功する", async () => {
  const oldTodos = await getTodos();

  // post内容
  const postData = {
    title: "test title",
    body: "test body",
  };
  
  // 上記の内容でpostをendPointのサーバーに送る
  // statusは成功時の返り期待値
  const response = await requestHelper
    .request({
      method: "post",
      endPoint: "/api/todos",
      statusCode: 200,
    })
    .send(postData);

    // 必要なプロパティがあるかを確認する
  const createdTodo = response.body;
  assert.deepEqual(createdTodo, {
    id: createdTodo.id,
    title: postData.title,
    body: postData.body,
    createdAt: createdTodo.createdAt,
    updatedAt: createdTodo.updatedAt,
  });

  // 新規作成と既存のデータの数を比較する　
  // 新規作成すると + 1の数になる
  const currentTodos = await getTodos();
  assert.equal(oldTodos.length + 1, currentTodos.length);
});
