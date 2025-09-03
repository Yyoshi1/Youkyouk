// backend/models/seller/Module.js
import { Model } from "objection"

export class Module extends Model {
  static get tableName() { return "modules" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    const { Product } = require("./Product")

    return {
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass: Seller,
        join: { from: "modules.seller_id", to: "sellers.id" }
      },
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: { from: "modules.id", to: "products.module_id" }
      }
    }
  }
}
