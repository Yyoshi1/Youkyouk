import { Plugin } from "../../models/seller/Plugin.js"

export class PluginsController {
  static async list(req, res) {
    const sellerId = req.params.sellerId
    const plugins = await Plugin.query().where("seller_id", sellerId)
    res.json(plugins)
  }

  static async toggle(req, res) {
    const id = req.params.id
    const plugin = await Plugin.query().patchAndFetchById(id, { active: req.body.active })
    res.json(plugin)
  }
}
