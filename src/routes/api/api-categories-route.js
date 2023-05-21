const express = require('express');

const apiCategoriesController = require('../../controllers/api/api-categories-controller');

const router = express.Router();

router.get('/', apiCategoriesController.getAll);
router.get('/:id', apiCategoriesController.getCategory);
router.post('/', apiCategoriesController.addCategory);
router.put('/:id', apiCategoriesController.editCategory);
router.delete('/:id', apiCategoriesController.deleteCategory);

module.exports = router;
