import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from "../../../lib/db";
async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid input" });
    return;
  }

  //数据库查看是否有相同的email用户
  const client = await connectToDatabase();
  const db = client.db();

  const existUser = db.collection("users").findOne({ email: email });
  if (existUser) {
    res.status(422).json({ message: "User exist already" });
    client.close();
    return;
  }

  //加密密码 并注册用户
  const hashedPassword = await hashPassword(password);
  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
  client.close();
}
export default handler;
