const db = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

const CREATURES_COLLECTION = "creatures"

function CreatureModel() { };

CreatureModel.getCreatureById = function (id, callback) {
  let db_connect = db.getDb();
  let query = { _id: ObjectId(id) };

  db_connect
  .collection(CREATURES_COLLECTION)
  .findOne(query, function (error, result) {
    callback(error, result);
  });
}

CreatureModel.getCreatureByName = function (name, callback) {
  let db_connect = db.getDb();
  let query = { name: name };

  db_connect
  .collection(CREATURES_COLLECTION)
  .findOne(query, function (error, result) {
    callback(error, result);
  });
}

CreatureModel.addCreature = function (creature, callback) {
  let db_connect = db.getDb();

  // Future: Add creature object validation

  db_connect.collection(CREATURES_COLLECTION).insertOne(creature, function (error, result) {
    callback(error, result)
  }
)};

CreatureModel.updateCreature = function (id, creature, callback) {
  let db_connect = db.getDb();
  let query = { _id: ObjectId(id) };

  // For now only name and description
  // Todo: Add more fields or add seperate model(s)
  var newCreature = { 
    $set: {
      name: creature.name, 
      description: creature.description
    } 
  };

  db_connect
  .collection(CREATURES_COLLECTION)
  .updateOne(query, newCreature, function (error, result) {
    callback(error, result)
  });
}

CreatureModel.deleteCreature = function (id, callback) {
  let db_connect = db.getDb();
  let query = { _id: ObjectId(id) };

  db_connect.collection(CREATURES_COLLECTION).deleteOne(query, function (error, result) {
    callback(error, result)
  }
)};

module.exports = CreatureModel