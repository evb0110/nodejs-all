const {MongoClient} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'myfirstdb';

const client = new MongoClient(url, { useNewUrlParser: true });

client.connect((err, client) => {
  assert.equal(null, err);
  console.log(client);
  console.log("connected");
  client.close();
});