const Category = require('../models/Category');
const Item = require('../models/Item');

exports.getAllCategories = (req, res) => {
  res.render('./inventory-management/index', {
    pageTitle: 'Homepage',
    products: Category.fetchAll(),
    path: '/',
    type: 'category',
  });
};

exports.addCategory = (req, res) => {
  res.render('./inventory-management/form', {
    pageTitle: 'Add Category',
    path: '/add-category',
    editing: false,
    type: 'category',
  });
};

exports.postAddCategory = (req, res) => {
  const id = Category.getMaxId();
  const { title, imageUrl } = req.body;
  const category = new Category(id, title, imageUrl);
  category.save();
  res.redirect('/');
};

exports.editCategory = (req, res) => {
  const { edit } = req.query;
  const { id } = req.params;
  const category = Category.getCategoryById(id);
  res.render('./inventory-management/form', {
    pageTitle: 'Edit Category',
    product: category,
    path: '/add-category',
    editing: edit,
    type: 'category',
  });
};

exports.postEditCategory = (req, res) => {
  const { id } = req.params;
  const { title, imageUrl } = req.body;
  Category.editCategoryById(id, title, imageUrl);
  res.redirect('/');
};

exports.postDeleteCategory = (req, res) => {
  const { id } = req.params;
  Item.deleteItemByCategoryId(id);
  Category.deleteCategoryById(id);
  res.redirect('/');
};
