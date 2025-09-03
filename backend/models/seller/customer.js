import { Model } from "objection"

export class Customer extends Model {
  static get tableName() { return "customers" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    const { Order } = require("./Order")
    const { Message } = require("./Message")
    const { Review } = require("./Review")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "customers.seller_id", to: "sellers.id" } },
      orders: { relation: Model.HasManyRelation, modelClass: Order, join: { from: "customers.id", to: "orders.user_id" } },
      messages: { relation: Model.HasManyRelation, modelClass: Message, join: { from: "customers.id", to: "messages.user_id" } },
      reviews: { relation: Model.HasManyRelation, modelClass: Review, join: { from: "customers.id", to: "reviews.user_id" } }
    }
  }
}
