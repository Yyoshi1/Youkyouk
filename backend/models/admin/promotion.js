// backend/models/admin/Promotion.js
import { Model } from "objection"

export class Promotion extends Model {
  static get tableName() { return "promotions" }

  static get relationMappings() {
    const { Product } = require("./Product")
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: { from: "promotions.id", to: "products.promotion_id" }
      }
    }
  }
}
