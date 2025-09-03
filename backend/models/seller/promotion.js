import { Model } from "objection"

export class Promotion extends Model {
  static get tableName() { return "promotions" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "promotions.seller_id", to: "sellers.id" } }
    }
  }
}
