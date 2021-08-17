const server = require('../server')
const db = require("../models");
const Contact = db.Contact;

// Create a new contact
server.app.post('/api/contact', (req, res) => {
    // Validate
    if (!req.body.firstname) {
        res.status(400).send({
            message: "Content can not be empty"
        })
        return;
    }
    const contact = {
        firstname: req.body.firstname,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone
    }
    Contact.create(contact)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
})
