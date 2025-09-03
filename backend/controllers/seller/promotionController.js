import Promotion from "../../models/seller/promotion.model.js";

export default {
  async index(req, res) {
    const promotions = await Promotion.findAll({ where: { seller_id: req.params.sellerId } });
    res.json(promotions);
  },

  async create(req, res) {
    const promotion = await Promotion.create({ ...req.body, seller_id: req.params.sellerId });
    res.status(201).json(promotion);
  },

  async update(req, res) {
    const promotion = await Promotion.findByPk(req.params.id);
    if (!promotion) return res.status(404).json({ error: "Promotion not found" });
    await promotion.update(req.body);
    res.json(promotion);
  },

  async delete(req, res) {
    const promotion = await Promotion.findByPk(req.params.id);
    if (!promotion) return res.status(404).json({ error: "Promotion not found" });
    await promotion.destroy();
    res.status(204).end();
  }
};
