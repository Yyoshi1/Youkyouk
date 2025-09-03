import { Model } from "objection"

export class Message extends Model {
  static get tableName() { return "messages" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    const { Customer } = require("./Customer")

    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "messages.seller_id", to: "sellers.id" } },
      customer: { relation: Model.BelongsToOneRelation, modelClass: Customer, join: { from: "messages.customer_id", to: "customers.id" } },
    }
  }
}
