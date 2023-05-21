const express = require('express');

const itemsController = require('../controllers/items-controller');

const router = express.Router();

router.get('/add-item/:categoryId', itemsController.addItem);
router.get('/:categoryId', itemsController.getAllItemsByCategoryId);
router.get('/edit-item/:id', itemsController.editItem);
router.post('/add-item', itemsController.postAddItem);
router.post('/edit-item/:id', itemsController.postEditItem);
router.post('/delete-item/:id', itemsController.postDeleteItem);

module.exports = router;
