let items = [
  {
    id: 1,
    categoryId: 1,
    brand: 'Fender',
    price: 45000,
    imageUrl:
      'https://www.jbmusic.com.ph/__resources/webdata/images/products/4023.JPG',
    stock: 2,
  },
];

module.exports = class Item {
  constructor(id, categoryId, brand, price, imageUrl, stock) {
    this.id = id;
    this.categoryId = categoryId;
    this.brand = brand;
    this.price = price;
    this.imageUrl = imageUrl;
    this.stock = stock;
  }

  static getItemsByCategoryId(categoryId) {
    return items.filter(item => item.categoryId.toString() === categoryId);
  }

  save() {
    items.push(this);
  }

  static fetchAll() {
    return items;
  }

  static getMaxId() {
    if (items.length === 0) return 0;
    const ids = items.map(name => name.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  static getItemById(id) {
    return items.find(name => name.id.toString() === id);
  }

  static editItemById(id, categoryId, brand, price, imageUrl, stock) {
    const index = items.findIndex(name => name.id.toString() === id);
    if (index === -1) return false;
    items[index].categoryId = categoryId;
    items[index].brand = brand;
    items[index].price = price;
    items[index].imageUrl = imageUrl;
    items[index].stock = stock;
    return true;
  }

  static deleteItemById(id) {
    const index = items.findIndex(name => name.id.toString() === id);
    if (index === -1) return false;
    items.splice(index, 1);
    return true;
  }

  static deleteItemByCategoryId(categoryId) {
    const deleteItems = items.filter(
      item => item.categoryId.toString() === categoryId
    );
    if (deleteItems.length === 0) return false;
    const newItems = items.filter(
      item => item.categoryId.toString() !== categoryId
    );
    items = newItems;
    return true;
  }
};
