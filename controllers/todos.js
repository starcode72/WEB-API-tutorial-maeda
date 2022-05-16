const Todo = require("../models/Todo");

module.exports = {
  getTodos: (req, res) => {
    const storedTodos = Todo.findAll();

    res.status(200).json(storedTodos);
  },
};


// controller/todo.jsファイル
// 元のTodo.jsをrequireで読み込みインポート
// その読み込み先ファイルの関数を実行して処理を行い
// 戻り値を変数化して
// module.exportsで結果変数とstatusを返す

