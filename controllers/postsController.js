const posts = require('../data/posts');

//index
const index = (req, res) => {
  // res.send(`elenco dei posts`)
  let listaPosts = posts
  if (req.query.tags) {
    let tag = req.query.tags;
    listaPosts = posts.filter(post => post.tags.includes(tag))
  }
  res.json(listaPosts)
};

//show
const show = (req, res) => {
  // res.send(`mostro un post con id:` + req.params.id)
  const post = posts.find(post => post.id == req.params.id);

  res.json(post)
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
  // res.send(`elimino un post con id:` + req.params.id)
  const post = posts.find(post => post.id == req.params.id);

  posts.splice(posts.indexOf(post), 1);
  console.log(posts);
  // if (!post) {
  //   res.status(404)
  //   return res.json({
  //     message: 'post non trovato',
  //     status: 404,
  //     error: 'not found'
  //   })
  // }

  res.sendStatus(204)
};



module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}