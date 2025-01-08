const posts = require('../data/posts');

//index
const index = (req, res) => {
  console.log(req.query);
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

  if (!post) {
    res.status(404)
    return res.json({
      message: 'post non trovato',
      status: 404,
      error: 'not found'
    })
  }
  res.json(post)
};

//store
const store = (req, res) => {
  // res.send(`aggiungo un nuovo post`)
  console.log(req.body);
  const id = posts.at(-1).id + 1;
  //creo nuovo oggetto
  const newPost = {
    id,
    ...req.body,
  }
  //pusho l'oggetto nell'array
  posts.push(newPost)
  console.log(posts);
  res.status(201)
  res.json(posts)
};

//update
const update = (req, res) => {
  // res.send(`modifico un post con id:` + req.params.id)
  console.log(req.body);
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id)
  // console.log(post);

  //gestione errore
  if (!post) {
    res.status(404);
    return res.json({
      message: 'post non trovato',
      status: 404,
      error: 'Not Found'
    })
  }
  //
  post.title = req.body.title
  post.content = req.body.content
  post.image = req.body.image
  post.tags = req.body.tags
  res.json(post)
};

//modify
const modify = (req, res) => {
  res.send(`modifico in parte un post con id:` + req.params.id)
};

//destroy
const destroy = (req, res) => {
  // res.send(`elimino un post con id:` + req.params.id)
  const id = parseInt(req.params.id)
  const post = posts.find(post => post.id == id);

  posts.splice(posts.indexOf(post), 1);
  console.log(posts);
  if (!post) {
    res.status(404)
    return res.json({
      message: 'post non trovato',
      status: 404,
      error: 'not found'
    })
  }

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