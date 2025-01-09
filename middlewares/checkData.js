//middleware di inserimento dati corretti
const checkData = (req, res, next) => {
  console.log('middleware chiamato');

  const { title, content, image, tags } = req.body;

  if (!title || !content || !image || !tags) {
    return res.status(400).json({
      message: 'tutti i campi sono obbligatori: title, content, image e tags',
      status: 400,
      error: 'Bad Request'
    })
  }

  if (typeof title !== 'string' || typeof content !== 'string' || typeof image !== 'string') {
    return res.status(400).json({
      message: 'usa solo caratteri per compilare i campi',
      status: 400,
      error: 'Bad Request'
    })
  }

  if (!Array.isArray(tags) || tags.some(tag => typeof tag !== 'string')) {
    return res.status(400).json({
      message: 'inserisci i tag in un array',
      status: 400,
      error: 'Bad Request'
    })
  }
  next()
}


module.exports = checkData;