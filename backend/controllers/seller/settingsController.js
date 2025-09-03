import { Settings } from "../../models/seller/Settings.js"

export class SettingsController {
  static async get(req, res) {
    const sellerId = req.params.sellerId
    const settings = await Settings.query().findOne({ seller_id: sellerId })
    res.json(settings)
  }

  static async update(req, res) {
    const sellerId = req.params.sellerId
    const updated = await Settings.query().patchAndFetchById(req.params.id, req.body)
    res.json(updated)
  }
}
