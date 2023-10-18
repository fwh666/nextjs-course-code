import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    // 'mongodb+srv://maximilian:ZbJcz3dJ88LSUMlM@cluster0.ntrwp.mongodb.net/auth-demo?retryWrites=true&w=majority'
    'mongodb+srv://fwh_nextjs:bZPSiyWP1giE6JWf@cluster0.o1vxc4o.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
