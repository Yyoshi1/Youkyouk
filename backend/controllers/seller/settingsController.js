// backend/controllers/seller/SettingsController.js
import { Settings } from "../../models/seller/Settings"

export default {
  async get(req, res) {
    const settings = await Settings.query().findOne({ seller_id: req.params.sellerId })
    res.json(settings)
  },

  async update(req, res) {
    let settings = await Settings.query().findOne({ seller_id: req.params.sellerId })
    if (settings) {
      settings = await Settings.query().patchAndFetchById(settings.id, req.body)
    } else {
      settings = await Settings.query().insert({ ...req.body, seller_id: req.params.sellerId })
    }
    res.json(settings)
  }
}
