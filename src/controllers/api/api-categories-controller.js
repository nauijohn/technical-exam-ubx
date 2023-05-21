const Category = require('../../models/Category');

exports.getAll = (req, res) => {
  const categories = Category.fetchAll();
  return res.send(categories);
};

exports.getCategory = (req, res) => {
  const { id } = req.params;
  const category = Category.getCategoryById(id);
  if (!category) res.status(404).send();
  return res.send(category);
};

exports.addCategory = (req, res) => {
  const id = Category.getMaxId();
  const { title, imageUrl } = req.body;
  const category = new Category(id, title, imageUrl);
  category.save();
  return res.send('Successfully added category');
};

exports.editCategory = (req, res) => {
  const { id } = req.params;
  const { title, imageUrl } = req.body;
  const category = Category.getCategoryById(id);
  if (!category) return res.status(404).send();
  const result = Category.editCategoryById(id, title, imageUrl);
  if (!result) return res.status(404).send();
  return res.send('Successfully edited category');
};

exports.deleteCategory = (req, res) => {
  const { id } = req.params;
  const category = Category.getCategoryById(id);
  if (!category) return res.status(404).send();
  const result = Category.deleteCategoryById(id);
  if (!result) return res.status(404).send();
  return res.send('Successfully deleted category');
};
