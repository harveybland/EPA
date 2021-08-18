module.exports = app => {
    const Apprenticeships = require('../controller/apprenticeship.controller')

    var router = require("express").Router();
    
    // Get all apprenticeships
    router.get('/', Apprenticeships.findAll)

    app.use('/api/apprenticeships', router)
}
