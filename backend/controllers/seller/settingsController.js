import { Settings } from "../../models/seller/Settings"

export class SettingsController {
  static async get(req, res) {
    const settings = await Settings.query().findOne({ seller_id: req.user.id })
    res.json(settings)
  }

  static async update(req, res) {
    const settings = await Settings.query().patchAndFetchById(req.user.id, req.body)
    res.json(settings)
  }
}
