/**
 * 异步调用- 页面请求访问这个路径,触发调用
 * @param {入参} req
 * @param {出参} res
 */
import { connectDatabase, insertDocument } from "../../helpers/db-util";
async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email; //上游数据定义的body中email

    //校验输入的email 回显错误信息
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." }); //设置状态码
      return;
    }

    //客户端调用MongoDB处理数据
    let client;

    try {
      client = await connectDatabase();
      console.log("client", client);
    } catch (error) {
      res.status(500).json({ message: "connetting failed!" });
      return;
    }

    try {
      //插入数据, 参数: 客户端, 集合名, 数据
      await insertDocument(client, "newsletter", { email: userEmail });
      //fwh-注意关闭数据
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(200).json({ message: "Siged up!" });
  }
}
export default handler;
