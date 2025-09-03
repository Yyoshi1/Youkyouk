import { Model } from "objection"

export class PaymentMethod extends Model {
  static get tableName() { return "payment_methods" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "payment_methods.seller_id", to: "sellers.id" } }
    }
  }
}
