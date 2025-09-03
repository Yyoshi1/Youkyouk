import { Model } from "objection"

export class Discount extends Model {
  static get tableName() { return "discounts" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "discounts.seller_id", to: "sellers.id" } }
    }
  }
}
