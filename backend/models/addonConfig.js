import { Model } from "objection"

export class AddonConfig extends Model {
  static get tableName() { return "addon_config" }

  static get relationMappings() {
    const { Addon } = require("./Addon")
    return {
      addon: {
        relation: Model.BelongsToOneRelation,
        modelClass: Addon,
        join: { from: "addon_config.addon_id", to: "addons.id" }
      }
    }
  }
}
