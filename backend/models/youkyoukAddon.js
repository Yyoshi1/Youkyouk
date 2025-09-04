import { Model } from "objection"

export class YoukyoukAddon extends Model {
  static get tableName() { return "youkyouk_addons" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    return {
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass: Seller,
        join: { from: "youkyouk_addons.seller_id", to: "sellers.id" }
      }
    }
  }
}
