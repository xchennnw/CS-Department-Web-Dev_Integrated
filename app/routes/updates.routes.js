module.exports = app => {
    const updates = require("../controllers/updates.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", updates.create);
  
    // Retrieve all Tutorials
    router.get("/", updates.findAll);
  
  
    // Retrieve a single Tutorial with id
    router.get("/:id", updates.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", updates.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", updates.delete);
  
    // Create a new Tutorial
    router.delete("/", updates.deleteAll);
  
    app.use('/api/updates', router);
  };