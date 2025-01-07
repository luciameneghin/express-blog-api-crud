const posts = require('../data/posts');


//index
const index = (req, res) => {
  res.send(`elenco dei posts`)
};

//show
const show = (req, res) => {
  res.send(`mostro un post con id:` + req.params.id)
};

//store
const store = (req, res) => {
  res.send(`aggiungo un nuovo post`)
};

//update
const update = (req, res) => {
  res.send(`modifico un post con id:` + req.params.id)
};

//modify
const modify = (req, res) => {
  res.send(`modifico in parte un post con id:` + req.params.id)
};

//destroy
const destroy = (req, res) => {
  res.send(`elimino un post con id:` + req.params.id)
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}