import { Model } from "objection"

export class YoukyoukAddon extends Model {
  static get tableName() { return "youkyouk_addons" }

  static get relationMappings() {
    const { YoukyoukAddonConfig } = require("./YoukyoukAddonConfig")
    return {
      config: {
        relation: Model.HasOneRelation,
        modelClass: YoukyoukAddonConfig,
        join: { from: "youkyouk_addons.id", to: "youkyouk_addon_config.addon_id" }
      }
    }
  }
}
