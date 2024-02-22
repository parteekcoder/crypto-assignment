import  { MongoClient } from 'mongodb'

export async function initDatabase() {
  try {
    console.log(process.env.MONGO_URI);
    const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    return client.db(process.env.DB_NAME);
  } catch (error) {
    throw error
  }
}