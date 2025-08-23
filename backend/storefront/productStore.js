const { Product } = require('../models');

class ProductStore {
  static async getAll() {
    return await Product.findAll();
  }

  static async getById(id) {
    return await Product.findByPk(id);
  }

  static async searchByName(name) {
    return await Product.findAll({
      where: {
        name: { $like: `%${name}%` }
      }
    });
  }
}

module.exports = ProductStore;
