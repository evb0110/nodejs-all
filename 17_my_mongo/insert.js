const {MongoClient} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'myfirstdb';

const client = new MongoClient(url, { useNewUrlParser: true });

client.connect((err, client) => {
  assert.equal(null, err);
  console.log("connected");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    console.log('inserted');
  });
  client.close();
});

const insertDocuments = (db, callback) => {
  const collection = db.collection('documents');
  collection.insertMany([
    {aa : 1},
    {bb : 2},
    {ac : 3},
  ], (err, result) => {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log(`Inserted ${result.ops.length} docs`)
  });
}