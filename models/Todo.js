const todos = [];
let nextId = 1;

class Todo {
  constructor({ title, body }) {
    this.id = nextId++;
    this.title = title;
    this.body = body;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

// データ追加処理
for (let i = 0; i < 5; i++) {
  const index = i + 1;
  const todo = new Todo({
    title: "タイトル" + index,
    body: "ボディ" + index,
  });

  todos.push(todo);
}
// console.table(todos);

// slice()はデータ配列のコピーを返す 全体(引数無しは全体)
module.exports = {
  findAll: () => {
    return todos.slice();
  },
  // createメソッド
  create: ({ title, body }) => {
    if (!title) {
      throw new Error("titleは必須です");
    }
    if (!body) {
      throw new Error("bodyは必須です");
    }
    const todo = new Todo({
      title: title,
      body: body,
    });
    todos.push(todo);
    return todo;
  },

  update: ({ id, title, body }) => {
    if (typeof id !== "number" || id < 1) {
      throw new Error("idは必須です(1以上の数値)");
    }
    if (!title) {
      throw new Error("titleは必須です");
    }
    if (!body) {
      throw new Error("bodyは必須です");
    }
    const todo = todos.find((todo) => id === todo.id);
    if (!todo) {
      throw new Error("idに該当するtodoが存在しません");
    }
      todo.title = title;
      todo.body = body;
      todo.updatedAt = new Date();

      return todo;
  },
};
