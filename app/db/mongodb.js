import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.URI;

const client = new MongoClient(uri);

export async function getPosts() {
  try {
    const db = client.db('test');
    const data = db.collection('users');
    const products = data.findOne({ name: 'cafeteria' });
    console.log(products);
    await client.close();
    return productsList;
  } catch (err) {
    console.log('error');
    await client.close();
  }
}
