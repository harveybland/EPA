const db = require('../models/app.index');
const Apprenticeships = db.Apprenticeships;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const route = req.query.route;
  const status = req.query.status;
  
  const level = req.query.level;
  const duration = req.query.duration;

  let filters = [];

  if (!!route) {
    filters.push({ route: route });
  }
  if (!!status) {
    filters.push({ status: status });
  }
  if (!!level) {
    filters.push({ level: level });
  }
  if (!!duration) {
    filters.push({ duration: duration });
  }

  var condition = { [Op.and]: filters };

  Apprenticeships.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.'          
      });
    });

};
