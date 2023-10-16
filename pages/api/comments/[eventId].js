/**
 * 异步处理评论数据
 * 文件名为eventid,  此文件名可以从获取多个id的不同页面,  也可以其他组件查询到此evetid值
 * @param {} req
 * @param {*} res
 */
import {
  insertDocument,
  connectDatabase,
  getAllDocuments,
} from "../../../helpers/db-util";
async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    //校验无效数据
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      //构参-插入数据
      result = await insertDocument(client, "comments", newComment);
      //自动生成唯一id数据
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
    }
  }

  if (req.method === "GET") {
    try {
      //get请求查询数据,按照ID排序
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }

  client.close();
}
export default handler;
