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
  const result = await db.collection(collection).insertOn(document);//选择集合库, 插入数据
  return result;
}

export default connectDatabase;
