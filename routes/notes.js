var express = require("express");
var router = express.Router();

// 接続情報を設定

const { MongoClient } = require("mongodb");
const uri = "*************";
const client = new MongoClient(uri);

router.get("/", async (req, res) => {
  //データベース、コレクションを指定
  const database = client.db("notes");
  const notes = database.collection("notes");

  // idが1のドキュメントを取得
  const query = { id: 2 };
  const note = await notes.findOne(query);

  res.json(notes.title);
});

module.exports = router;

// レスポンスのデータ（ノート全件）

//const responseObjectDataAll = {
//textObject1 : {
//id: 1,
//title: 'ノート１のタイトルです',
//subTitle: 'ノート１のサブタイトルです',
//bodyText: 'ノート１の本文です'
//},
//textObject2 : {
//id: 2,
//title: 'ノート２のタイトルです',
//subTitle: 'ノート２のサブタイトルです',
//bodyText: 'ノート２の本文です'
//},
//};

//router.get('/', function (req, res, next) {
// 全件取得して返す
//res.json(responseObjectDataAll);
//})
//module.exports = router;
