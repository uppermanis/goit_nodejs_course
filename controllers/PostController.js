const Post = require('../schemas/post')

function getById(req, res, next) {

}

async function create(req, res, next) {
  const { title, content } = req.body

  const post = await Post.create({title, content})

  return res.status(201).json({ code: 201, data: post })
}

function getAll(req, res, next) {

}

function updateById(req, res, next) {

}


module.exports = {
  getById,
  create,
  getAll,
  updateById,
}