const db = require("../models/contact.index");
const Contact = db.Contact;

// Create a new contact
exports.create = (req, res) => {
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
}

exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    Contact.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

