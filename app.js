const posts = require('./data/posts');
const express = require('express');
const postsRouter = require('./routers/postsRouters')
const notFound = require('./middlewares/notFound')
const app = express();

const port = 3000;

//body-parser di json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server posts')
});

app.use('/posts', postsRouter)

app.use(notFound)
//porta in ascolto
app.listen(port, () => {
  console.log(`porta in ascolto ${port}`);
})