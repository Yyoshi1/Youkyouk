import { Model } from "objection"

export class YoukyoukPromotion extends Model {
  static get tableName() { return "promotions" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")

    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "promotions.seller_id", to: "sellers.id" } }
    }
  }
}
