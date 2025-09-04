import { YoukyoukPageLayout } from "../models/YoukyoukPageLayout.js"
import { YoukyoukAddon } from "../models/YoukyoukAddon.js"

export const getPageLayout = async (req, res) => {
  const layout = await YoukyoukPageLayout.query()
    .withGraphFetched("addons.[config]")
  res.json(layout.addons)
}

export const toggleAddon = async (req, res) => {
  const addon = await YoukyoukAddon.query().findById(req.params.id)
  addon.enabled = !addon.enabled
  await addon.$query().patch({ enabled: addon.enabled })
  res.json({ success: true, enabled: addon.enabled })
}
