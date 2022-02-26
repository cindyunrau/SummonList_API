module.exports = app => {
    const creatures = require("../controllers/creature.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", creatures.create);
    // Retrieve all creatures
    router.get("/", creatures.findAll);
    // Retrieve all published creatures
    router.get("/base", creatures.findAllBase);
    // Retrieve a single Tutorial with id
    router.get("/:id", creatures.findOne);
    // Update a Tutorial with id
    router.put("/:id", creatures.update);
    // Delete a Tutorial with id
    router.delete("/:id", creatures.delete);
    // Delete all creatures
    router.delete("/", creatures.deleteAll);
    app.use('/api/creatures', router);
  };