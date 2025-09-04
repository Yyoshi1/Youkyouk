import { Model } from "objection"

export class YoukyoukSettings extends Model {
  static get tableName() { return "youkyouk_settings" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "youkyouk_settings.seller_id", to: "youkyouk_sellers.id" } }
    }
  }
}
