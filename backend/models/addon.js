import { Model } from "objection"

export class Addon extends Model {
  static get tableName() { return "addons" }

  static get relationMappings() {
    const { GTM } = require("./Addons/GTM")
    return {
      gtm: { relation: Model.HasOneRelation, modelClass: GTM, join: { from: "addons.id", to: "gtm_addon.id" } }
    }
  }
}
