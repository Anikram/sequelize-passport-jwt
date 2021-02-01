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
  },
  add(req,res) {
    console.log(req.body)
    return User
      .create({
        name: req.body.name,
        email: req.body.email
      })
      .then(() => {
        return res.status(201).send()
      })
      .catch(error => res.status(400).send(error))
  },
  delete(req,res) {
    return User
      .findByPk(req.params.id)
      .destroy()
      .then(user => {
        if (!user) return res.status(404).send({message: 'User not found'})
        return res.status(204).send(user)
      })
      .catch(error => res.status(400).send(error))
  }
};