const express = require('express');
const categoriesController = require('../controllers/categories-controller');

const router = express.Router();

router.get('/', categoriesController.getAllCategories);
router.get('/add-category', categoriesController.addCategory);
router.get('/edit-category/:id', categoriesController.editCategory);
router.get('/items/:categoryId');

router.post('/add-category', categoriesController.postAddCategory);
router.post('/edit-category/:id', categoriesController.postEditCategory);
router.post('/delete-category/:id', categoriesController.postDeleteCategory);

module.exports = router;
