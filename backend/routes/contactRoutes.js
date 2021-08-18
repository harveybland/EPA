module.exports = app => {
    const contact = require("../controller/contact.controller")

    var router = require("express").Router();
    
    // Create a new Contact
    router.post("/", contact.create);

    // Get all contacts
    // router.get("/", contact.findAll);

    app.use('/api/contact', router)
}