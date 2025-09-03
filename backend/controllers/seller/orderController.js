import Order from "../../models/seller/order.model.js";

export default {
  async index(req, res) {
    const orders = await Order.findAll({ where: { seller_id: req.params.sellerId } });
    res.json(orders);
  },

  async show(req, res) {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  },

  async updateStatus(req, res) {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    await order.update({ status: req.body.status });
    res.json(order);
  }
};
