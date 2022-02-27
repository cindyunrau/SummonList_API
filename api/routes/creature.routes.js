module.exports = app => {
    const creatures = require("../controllers/creature.controller.js");
    var router = require("express").Router();

    router.post("/", creatures.create);

    router.get("/", creatures.findAll);
    router.get("/base", creatures.findAllBase);
    router.get("/:id", creatures.findOne);

    router.put("/:id", creatures.update);

    router.delete("/:id", creatures.delete);
    router.delete("/", creatures.deleteAll);
    
    app.use('/api/creatures', router);
  };