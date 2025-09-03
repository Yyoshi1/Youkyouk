import { Settings } from "../../models/admin/Settings"

export class SettingsController {
  static async get(req, res) {
    const settings = await Settings.query().findOne()
    res.json(settings)
  }

  static async update(req, res) {
    const settings = await Settings.query().patchAndFetchById(req.params.id, req.body)
    res.json(settings)
  }
}
