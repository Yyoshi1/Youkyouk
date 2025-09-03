import { Model } from "objection"

export class Promotion extends Model {
  static get tableName() { return "promotions" }

  static get relationMappings() {
    const { Product } = require("./Product")
    const { Seller } = require("./Seller")

    return {
      product: { relation: Model.BelongsToOneRelation, modelClass: Product, join: { from: "promotions.product_id", to: "products.id" } },
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "promotions.seller_id", to: "sellers.id" } },
    }
  }
}
