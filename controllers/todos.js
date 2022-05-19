const { create } = require("../models/Todo");
const Todo = require("../models/Todo");

module.exports = {
  // get method
  getTodos: (req, res) => {
    const storedTodos = Todo.findAll();

    res.status(200).json(storedTodos);
  },

  // post method
  postTodo: (req, res) => {
    // console.log(req.body);
    try {
      const { title, body } = req.body;
      const createdTodo = Todo.create({ title, body });

      res.status(200).json(createdTodo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

// controller/todo.jsファイル
// 元のTodo.jsをrequireで読み込みインポート
// その読み込み先ファイルの関数を実行して処理を行い
// 戻り値を変数化して
// module.exportsで結果変数とstatusを返す
