const express = require("express");
const creatureRouter = express.Router();
const CreatureModel = require("../models/creature.model");
 
 
creatureRouter.route("/creature").get(function (req, response) {
  const TAG = "Creature: "
  CreatureModel.getAllCreatures(function (error, result) {
    if (error) {
      console.log(TAG + "ERROR: " + error);
    } else if (!result) {
      console.log(TAG + "ERROR: " + "No Creatures in Database :(");
    } else {
      console.log(TAG + "Got " + result.length + " Creature(s): ");
    }
    response.json(result)
  });
});
 
// Get a creature by Id
creatureRouter.route("/creature/id/:id").get(function (req, response) {
  const TAG = "Creature/Id: "
  CreatureModel.getCreatureById(req.params.id, function (error, result) {
    if (error) {
      console.log(TAG + "ERROR: " + error);
    } else if (!result) {
      console.log(TAG + "ERROR: " + "Creature Not Found :(");
    } else {
      console.log(TAG + "Got Creature: " + result.name);
    }
    response.json(result)
  });
});

// Get a creature by name
creatureRouter.route("/creature/name/:name").get(function (req, response) {
  const TAG = "Creature/Name: "
  CreatureModel.getCreatureByName(req.params.name, function (error, result) {
    if (error) {
      console.log(TAG + "ERROR: " + error);
    } else if (!result) {
      console.log(TAG + "ERROR: " + "Creature Not Found :(");
    } else {
      console.log(TAG + "Got Creature: " + result.name);
    }
    response.json(result)
  });
});

// Get all creatures by partial/complete name
creatureRouter.route("/creature/search/name/:name").get(function (req, response) {
  const TAG = "Creature/Search/Name: "
  CreatureModel.searchCreatureByName(req.params.name, function (error, result) {
    if (error) {
      console.log(TAG + "ERROR: " + error);
    } else if (!result) {
      console.log(TAG + "ERROR: " + "No Creatures Found");
    } else {
      console.log(TAG + "Got " + result.length + " Creatures.");
    }
    response.json(result)
  });
});
 
// Add a creature 
creatureRouter.route("/creature/add").post(function (req, response) {
  const TAG = "Creature/Add: "
  CreatureModel.getCreatureByName(req.body.name, function (error, result) {
    if (error) {
      console.log(TAG + "ERROR: " + error);
    } else if (result) {
        return response.json("Creature with that name (" + result.name + ") already exists, ID: " + result._id);
    } else {
      CreatureModel.addCreature(req.body, function (error, result){
        if (error) throw error
        console.log(TAG + "Added Creature: " + req.body.name);

      })
    }
    response.json(result);
  });
});
 
// Update a creature
creatureRouter.route("/creature/update/:id").post(function (req, response) {
  const TAG = "Creature/Update: "
  CreatureModel.updateCreature(req.params.id, req.body, function (error, result) {
    if (error) throw error
    console.log(TAG + "Updated Creature: " + req.body.name);
    response.json(result);
  });
});
 
// Delete A Creature
creatureRouter.route("/creature/:id").delete(function (req, response) {
  const TAG = "Creature/Delete: "
  CreatureModel.deleteCreature(req.params.id, function (error, result) {
    if(error) throw error
    console.log(TAG + "Deleted Creature: " + req.params.id)
    response.json(result)
  })
});

// Delete All Creatures
creatureRouter.route("/creature").delete(function (req, response) {
  const TAG = "Creature/DeleteAll: "
  CreatureModel.deleteAllCreatures(function (error, result) {
    if(error) throw error
    console.log(TAG + "Deleted All Creatures")
    response.json(result)
  })
});

 
module.exports = creatureRouter;