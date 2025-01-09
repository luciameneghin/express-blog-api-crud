const posts = require('./data/posts');
const express = require('express');
const postsRouter = require('./routers/postsRouters');
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');
const checkData = require('./middlewares/checkData');

const app = express();

const port = 3000;

//body-parser di json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server posts')
});

app.use('/posts', postsRouter)

//middleware del controllo dati inseriti in postsRouters.js

//500
app.use(errorsHandler);
//404
app.use(notFound);

//porta in ascolto
app.listen(port, () => {
  console.log(`porta in ascolto ${port}`);
})