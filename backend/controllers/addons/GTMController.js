import { GTM } from "../../models/Addons/GTM.js"

export const GTMController = {
  getSettings: async (req, res) => {
    const settings = await GTM.query()
    res.json(settings)
  },
  updateSettings: async (req, res) => {
    const { id, ...data } = req.body
    await GTM.query().findById(id).patch(data)
    res.json({ success: true })
  }
}
