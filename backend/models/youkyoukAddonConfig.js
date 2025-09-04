import { Model } from "objection"

export class YoukyoukAddonConfig extends Model {
  static get tableName() { return "youkyouk_addon_config" }

  static get relationMappings() {
    const { YoukyoukAddon } = require("./YoukyoukAddon")
    return {
      addon: {
        relation: Model.BelongsToOneRelation,
        modelClass: YoukyoukAddon,
        join: { from: "youkyouk_addon_config.addon_id", to: "youkyouk_addons.id" }
      }
    }
  }
}
