import { GTM } from "../../models/addons/GTM.js"
export const GTMController = {
  get: async (req, res) => res.json(await GTM.query()),
  update: async (req, res) => {
    const { id, ...data } = req.body
    await GTM.query().findById(id).patch(data)
    res.json({ success: true })
  }
}
