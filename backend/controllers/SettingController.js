import { Setting } from "../models/Setting"

export default class SettingController {
  static async index(req, res) {
    const settings = await Setting.query()
    res.json(settings)
  }

  static async update(req, res) {
    try {
      const { key, value } = req.body
      const setting = await Setting.query().patchAndFetchById(key, { value })
      res.json(setting)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}
