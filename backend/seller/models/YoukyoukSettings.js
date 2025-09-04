import { Model } from "objection"

export class YoukyoukSettings extends Model {
  static get tableName() { return "settings" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "settings.seller_id", to: "sellers.id" } }
    }
  }
}
