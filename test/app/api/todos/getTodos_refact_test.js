// リファクタリング前の２つのファイル読み込み
// const request = require("supertest");
// const app = require("../../../../app");
const assert = require("power-assert");
const requestHelper = require("../../../helper/requestHelper");

// 詳しくはsupertestのドキュメントを参考にする
// リファクタリング後
describe("test 『GET /api/todos』", () => {
  it("returns todos in response.body", async () => {
    const response = await requestHelper.request({
      method: "get",
      endPoint: "/api/todos",
      statusCode: 200,
    });

    // リファクタリング前の状態
    // const response = await request(app)
    //   .get("/api/todos")
    //   .set("Accept", "application/json")
    //   .expect("Content-Type", /application\/json/)
    //   .expect(200);

    // console.log(response.boy, "supertest OK!");

    const todos = response.body;
    assert.equal(Array.isArray(todos), true);
    todos.forEach((todo) => {
      assert.equal(typeof todo.id === "number", true);
      assert.equal(typeof todo.title === "string", true);
      assert.equal(typeof todo.body === "string", true);
      assert.equal(typeof todo.createdAt === "string", true);
      assert.equal(typeof todo.updatedAt === "string", true);
    });
    console.log(response, "todos forEach");
  });
});

// リファクタリング前の記述

// // const request = require("supertest");
// // const app = require("../../../../app");
// const assert = require("power-assert");
// const requestHelper = require("../../../helper/requestHelper");

// // 詳しくはsupertestのドキュメントを参考にする
// describe("test 『GET /api/todos』", () => {
//   it("returns todos in response.body", async () => {
//     const response = await request(app)
//       .get("/api/todos")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /application\/json/)
//       .expect(200);

//     console.log(response.boy, "supertest OK!");

//     const todos = response.body;
//     assert.equal(Array.isArray(todos), true);
//     todos.forEach((todo) => {
//       assert.equal(typeof todo.id === "number", true);
//       assert.equal(typeof todo.title === "string", true);
//       assert.equal(typeof todo.body === "string", true);
//       assert.equal(typeof todo.createdAt === "string", true);
//       assert.equal(typeof todo.updatedAt === "string", true);
//     });
//     console.log(response, "todos forEach");
//   });
// });
