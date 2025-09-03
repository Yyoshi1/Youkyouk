import { Addon } from "../../models/admin/Addon"

export class AddonController {
  static async list(req, res) {
    const addons = await Addon.query()
    res.json(addons)
  }

  static async enable(req, res) {
    const addon = await Addon.query().patchAndFetchById(req.params.id, { active: true })
    res.json(addon)
  }

  static async disable(req, res) {
    const addon = await Addon.query().patchAndFetchById(req.params.id, { active: false })
    res.json(addon)
  }
}
