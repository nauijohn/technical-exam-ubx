const Item = require('../models/Item');

exports.getAllItemsByCategoryId = (req, res) => {
  const { categoryId } = req.params;
  const items = Item.getItemsByCategoryId(categoryId);
  res.render('./inventory-management/index', {
    pageTitle: 'Items',
    products: items,
    path: '/items',
    type: 'item',
    categoryId,
  });
};

exports.addItem = (req, res) => {
  const { categoryId } = req.params;
  res.render('./inventory-management/form', {
    pageTitle: 'Add Item',
    path: '/items/add-item',
    editing: false,
    type: 'item',
    categoryId,
  });
};

exports.postAddItem = (req, res) => {
  const { brand, imageUrl, stock, price, categoryId } = req.body;
  const id = Item.getMaxId();
  const item = new Item(id, categoryId, brand, price, imageUrl, stock);
  item.save();
  res.redirect(`/items/${categoryId}`);
};

exports.editItem = (req, res) => {
  const { edit } = req.query;
  const { id } = req.params;
  const item = Item.getItemById(id);
  res.render('./inventory-management/form', {
    pageTitle: 'Edit Item',
    product: item,
    path: '/edit-item',
    editing: edit,
    type: 'item',
    categoryId: item.categoryId,
  });
};

exports.postEditItem = (req, res) => {
  const { id } = req.params;
  const { brand, imageUrl, stock, price, categoryId } = req.body;
  Item.editItemById(id, categoryId, brand, price, imageUrl, stock);
  res.redirect(`/items/${categoryId}`);
};

exports.postDeleteItem = (req, res) => {
  const { id } = req.params;
  const { categoryId } = Item.getItemById(id);
  Item.deleteItemById(id);
  res.redirect(`/items/${categoryId}`);
};
