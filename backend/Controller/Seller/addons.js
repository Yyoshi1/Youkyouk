import { SellerAddon } from "../../models/seller/SellerAddon.js"

// 
export const getAddons = async (req, res) => {
  try {
    const addons = await SellerAddon.query().orderBy("id")
    res.json(addons)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// 
export const toggleAddon = async (req, res) => {
  try {
    const { id } = req.params
    const addon = await SellerAddon.query().findById(id)

    if (!addon) return res.status(404).json({ error: "Addon not found" })

    const updated = await SellerAddon.query()
      .patchAndFetchById(id, { enabled: !addon.enabled })

    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
