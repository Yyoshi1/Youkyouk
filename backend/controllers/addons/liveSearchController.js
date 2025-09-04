import { LiveSearch } from "../../models/addons/LiveSearch.js"
export const LiveSearchController = {
  get: async (req, res) => res.json(await LiveSearch.query()),
  update: async (req, res) => {
    const { id, ...data } = req.body
    await LiveSearch.query().findById(id).patch(data)
    res.json({ success: true })
  }
}
