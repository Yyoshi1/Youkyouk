// backend/controllers/seller/ModuleController.js
import { Module } from "../../models/seller/Module"

export default {
  async index(req, res) {
    const modules = await Module.query().where({ seller_id: req.params.sellerId })
    res.json(modules)
  },

  async activate(req, res) {
    const module = await Module.query().patchAndFetchById(req.params.id, { active: true })
    res.json(module)
  },

  async deactivate(req, res) {
    const module = await Module.query().patchAndFetchById(req.params.id, { active: false })
    res.json(module)
  }
}
