const server = require('../server')
const db = require('../models');
const Apprenticeship = db.Apprenticeship

// Get all apprenticeships
server.app.get('/api/apprenticeships', (req, res) => {
    db.Apprenticeship.findAll().then(data => {
        res.send(data)
    })
})