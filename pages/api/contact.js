import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        // "mongodb+srv://maximilian:2YkcXq43KyPk0vqp@cluster0.ntrwp.mongodb.net/my-site?retryWrites=true&w=majority"
        "mongodb+srv://fwh_nextjs:bZPSiyWP1giE6JWf@cluster0.o1vxc4o.mongodb.net/events?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "no connect to database" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "strong message failed" });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: "successfully stroed message", message: newMessage });
  }
}
export default handler;
