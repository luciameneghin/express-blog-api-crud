const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const checkData = require('../middlewares/checkData')

//index
router.get('/', postsController.index);
//show
router.get('/:id', postsController.show);
//store + middleware(checkData) validita dei dati inseriti
router.post('/', checkData, postsController.store);
//update
router.put('/:id', checkData, postsController.update);
//modify
router.patch('/:id', postsController.modify);
//destroy
router.delete('/:id', postsController.destroy);

module.exports = router;