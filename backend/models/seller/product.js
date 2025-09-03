import { Model } from "objection"

export class Product extends Model {
  static get tableName() { return "products" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    const { Review } = require("./Review")
    const { Promotion } = require("./Promotion")
    const { OrderItem } = require("./OrderItem")

    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "products.seller_id", to: "sellers.id" } },
      reviews: { relation: Model.HasManyRelation, modelClass: Review, join: { from: "products.id", to: "reviews.product_id" } },
      promotions: { relation: Model.HasManyRelation, modelClass: Promotion, join: { from: "products.id", to: "promotions.product_id" } },
      orderItems: { relation: Model.HasManyRelation, modelClass: OrderItem, join: { from: "products.id", to: "order_items.product_id" } },
    }
  }
}
