const Item = require('../../models/Item');

exports.getAll = (req, res) => {
  const items = Item.fetchAll();
  return res.send(items);
};

exports.getItem = (req, res) => {
  const { id } = req.params;
  const item = Item.getItemById(id);
  if (!item) res.status(404).send();
  return res.send(item);
};

exports.addItem = (req, res) => {
  const id = Item.getMaxId();
  const { categoryId, brand, price, imageUrl, stock } = req.body;
  const item = new Item(id, categoryId, brand, price, imageUrl, stock);
  item.save();
  return res.send('Successfully added category');
};

exports.editItem = (req, res) => {
  const { id } = req.params;
  const { categoryId, brand, price, imageUrl, stock } = req.body;
  const item = Item.getItemById(id);
  if (!item) return res.status(404).send();
  const result = Item.editItemById(
    id,
    categoryId,
    brand,
    price,
    imageUrl,
    stock
  );
  if (!result) return res.status(404).send();
  return res.send('Successfully edited item');
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;
  const item = Item.getItemById(id);
  if (!item) return res.status(404).send();
  const result = Item.deleteItemById(id);
  if (!result) return res.status(404).send();
  return res.send('Successfully deleted item');
};

exports.deleteItemsByCategoryId = (req, res) => {
  const { categoryId } = req.params;
  const result = Item.deleteItemByCategoryId(categoryId);
  if (!result) return res.status(404).send();
  return res.send('Successfully deleted item by categoryId');
};

exports.getItemsByCategoryId = (req, res) => {
  const { categoryId } = req.params;
  const itemsByCategoryId = Item.getItemsByCategoryId(categoryId);
  return res.send(itemsByCategoryId);
};
