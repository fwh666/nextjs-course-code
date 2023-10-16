import { MongoClient } from "mongodb";

//链接数据库
export async function connectDatabase() {
  //链接url 用户名和密码
  const client = await MongoClient.connect(
    "mongodb+srv://maximilian:8ZO3ycZqJ23kWBQx@cluster0.ntrwp.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOn(document); //选择集合库, 插入数据
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  //排序获取db的数据信息输出数组形式
  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
