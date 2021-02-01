const User = require('../models').User
const Post = require('../models').Post

module.exports = {
  list(req, res) {
    return User
      .findAll()
      .then(users => {
        res.status(200).send(users)
      })
      .catch(error => {res.status(400).send(error)})
  },
  getById(req, res){
    return User
      .findByPk(req.params.id,{
        include: [{model: Post, as: 'posts'}],
        order: [['createdAt', 'DESC'],[{model:Post, as: 'posts'},'createdAt','DESC']]
      })
      .then(user => {
        if (!user) return res.status(404).send({message: 'User not found'})
        return res.status(200).send(user)
      })
      .catch(error => res.status(400).send(error))
  }
};