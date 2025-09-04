import { Model } from "objection"

export class Addon extends Model {
  static get tableName() { return "addons" }

  static get relationMappings() {
    const { AddonConfig } = require("./AddonConfig")
    return {
      config: {
        relation: Model.HasOneRelation,
        modelClass: AddonConfig,
        join: { from: "addons.id", to: "addon_config.addon_id" }
      }
    }
  }
}
