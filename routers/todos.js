const express = require("express");
const router = express.Router();
const controller = require("../controllers/todos");

// このrouer内の処理をコントローラーファイルで管理する
router.route("/").get(controller.getTodos).post(controller.postTodo);

router.route("/:id").put(controller.putTodo).delete(controller.deleteTodo);

module.exports = router;

// routers/todos.jsファイル
// 通常のrouterと同じにexpressを読み込んでローダー化
// 上記のcontrolerファイルをrequireで読み込む
// routerのgetルーティンでリクエストされたら
// controller/todo.jsで
// module.exportsでアウトプットされているものを使用する
