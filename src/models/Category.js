const categories = [
  {
    id: 1,
    title: 'Stratocasters',
    imageUrl: 'https://m.media-amazon.com/images/I/71aTbbJS3TL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Telecasters',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJt5R2LwfVgRgip9rPNHmoRtoPDNGQ6ZA4g&usqp=CAU',
  },
];

module.exports = class Category {
  constructor(id, title, imageUrl) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
  }

  save() {
    categories.push(this);
  }

  static fetchAll() {
    return categories;
  }

  static getMaxId() {
    if (categories.length === 0) return 0;
    const ids = categories.map(category => category.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  static getCategoryById(id) {
    return categories.find(category => category.id.toString() === id);
  }

  static editCategoryById(id, title, imageUrl) {
    const index = categories.findIndex(
      category => category.id.toString() === id
    );
    if (index === -1) return false;
    categories[index].title = title;
    categories[index].imageUrl = imageUrl;
    return true;
  }

  static deleteCategoryById(id) {
    const index = categories.findIndex(
      category => category.id.toString() === id
    );
    if (index === -1) return false;
    categories.splice(index, 1);
    return true;
  }
};
