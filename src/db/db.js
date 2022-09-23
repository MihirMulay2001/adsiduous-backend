const { ObjectId } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const client = new MongoClient(process.env.DB_HOST, {
  useUnifiedTopology: true,
});

async function testConnection() {
  try {
    await client.connect();
    await client.db("AdsInfo").command({ ping: 1 });
    console.log("Connected successfully to server");
  } catch (e) {
    console.log("error", e);
  } finally {
    await client.close();
  }
}

async function getCollections() {
  await client.connect();
  const collection = client.db("AdsInfo").collection("adsinfo");
  const ans = await collection.find({}).toArray();
  client.close();
  return ans;
}

async function putNewAd(data) {
  await client.connect();
  const collection = client.db("AdsInfo").collection("adsinfo");
  const result = await collection.insertOne(data);
  console.log(`A document was inserted with the _id: ${result.insertedId}`);
  client.close();
}

async function updateAd(id, user_details) {
  await client.connect();
  const collection = client.db("AdsInfo").collection("adsinfo");
  const result = await collection.updateOne(
    { _id: ObjectId(id) },
    { $set: user_details }
  );
  client.close();
}

async function deleteAd(id) {
  await client.connect();
  const collection = client.db("AdsInfo").collection("adsinfo");
  console.log(ObjectId(id));
  const result = await collection.deleteOne({ _id: ObjectId(id) });
  console.log(`A document was deleted: ${result.acknowledged}`);
  client.close();
}

module.exports = {
  getCollections,
  putNewAd,
  testConnection,
  updateAd,
  deleteAd,
};
