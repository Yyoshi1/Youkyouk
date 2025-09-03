import Settings from "../../models/seller/settings.model.js";

export default {
  async get(req, res) {
    const settings = await Settings.findOne({ where: { seller_id: req.params.sellerId } });
    res.json(settings);
  },

  async update(req, res) {
    let settings = await Settings.findOne({ where: { seller_id: req.params.sellerId } });
    if (settings) {
      await settings.update(req.body);
    } else {
      settings = await Settings.create({ ...req.body, seller_id: req.params.sellerId });
    }
    res.json(settings);
  }
};
