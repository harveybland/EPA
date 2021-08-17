module.exports = app => {
    const apprenticeship = require('../controller/apprenticeship.controller')

    var router = require("express").Router();
    
    // Get all apprenticeships
    router.get('/', apprenticeship.findAll)

    app.use('/api/apprenticeships', router)
}
