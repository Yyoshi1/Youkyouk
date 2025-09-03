import { Model } from "objection"

export class ShippingMethod extends Model {
  static get tableName() { return "shipping_methods" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "shipping_methods.seller_id", to: "sellers.id" } }
    }
  }
}
