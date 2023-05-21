const express = require('express');

const apiItemsController = require('../../controllers/api/api-items-controller');

const router = express.Router();

router.get('/', apiItemsController.getAll);
router.get('/:id', apiItemsController.getItem);
router.post('/', apiItemsController.addItem);
router.put('/:id', apiItemsController.editItem);
router.delete('/:id', apiItemsController.deleteItem);
router.get('/category/:categoryId', apiItemsController.getItemsByCategoryId);
router.delete(
  '/category/:categoryId',
  apiItemsController.deleteItemsByCategoryId
);

module.exports = router;
