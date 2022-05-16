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

// slice()はデータ配列のコピーを返す
module.exports = {
  findAll: () => {
    return todos.slice();
  },
};
