const posts = require('./data/posts');
const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/postsRouters')

//body-parser di json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server posts')
});

app.use('/posts', postsRouter)


//porta in ascolto
app.listen(port, () => {
  console.log(`porta in ascolto ${port}`);
})