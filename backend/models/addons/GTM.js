import { Model } from "objection"

export class GTM extends Model {
  static get tableName() { return "gtm_addon" }

  static get relationMappings() {
    const { Settings } = require("./Settings")
    return {
      settings: { relation: Model.HasOneRelation, modelClass: Settings, join: { from: "gtm_addon.id", to: "settings.addon_id" } }
    }
  }
}
