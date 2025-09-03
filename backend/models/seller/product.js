import { Model } from "objection"

export class Product extends Model {
  static get tableName() { return "products" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "products.seller_id", to: "sellers.id" } }
    }
  }
}
