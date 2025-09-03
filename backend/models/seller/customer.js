import { Model } from "objection"

export class Customer extends Model {
  static get tableName() { return "customers" }

  static get relationMappings() {
    const { Order } = require("./Order")
    const { Review } = require("./Review")

    return {
      orders: { relation: Model.HasManyRelation, modelClass: Order, join: { from: "customers.id", to: "orders.customer_id" } },
      reviews: { relation: Model.HasManyRelation, modelClass: Review, join: { from: "customers.id", to: "reviews.customer_id" } },
    }
  }
}
