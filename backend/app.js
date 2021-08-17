// module.exports = app => {
//     const contact = require("../controller/contact.controller")

//     var router = require("express").Router();
    
//     // Create a new Contact
//     router.post("/", contact.create);

//     app.use('/api/contact', router)
// }

const server = require('./server')
require('./controller/contact.controller');
require('./controller/apprenticeship.controller');

// set port, listen for requests
const PORT = process.env.PORT || 8080;
server.app.listen(PORT, () => { console.log(`Server is running on port ${PORT}.`);
});