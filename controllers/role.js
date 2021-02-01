const Role = require('../models').Role;
const User = require('../models').User;

module.exports = {
  list(req,res) {
    return Role
      .findAll()
      .then(roles => {
        return res.status(200).send(roles)
      })
      .catch(error => res.status(400).send(error))
  }
};