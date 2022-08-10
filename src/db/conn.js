const { MongoClient } = require("mongodb");
require('dotenv').config();
const Db = process.env.ATLAS_URI;
//const Db = 'mongodb+srv://root:ShortHairDNTCR3!@summonmongodb.sflqrko.mongodb.net/test'
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db)
      {
        _db = db.db("summondb");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};