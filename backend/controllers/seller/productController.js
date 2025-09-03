import Product from "../../models/seller/product.model.js";

export default {
  async index(req, res) {
    const products = await Product.findAll({ where: { seller_id: req.params.sellerId } });
    res.json(products);
  },

  async show(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  },

  async create(req, res) {
    const product = await Product.create({ ...req.body, seller_id: req.params.sellerId });
    res.status(201).json(product);
  },

  async update(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    await product.update(req.body);
    res.json(product);
  },

  async delete(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    await product.destroy();
    res.status(204).end();
  }
};
