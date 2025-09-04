import { Model } from "objection"

export class YoukyoukPromotion extends Model {
  static get tableName() { return "youkyouk_promotions" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "youkyouk_promotions.seller_id", to: "youkyouk_sellers.id" } }
    }
  }
}
