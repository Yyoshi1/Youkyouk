import { Addon } from "../../models/seller/Addon"

export class AddonController {
  static async list(req, res) {
    const addons = await Addon.query().where("seller_id", req.user.id)
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
