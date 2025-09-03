// backend/models/admin/Category.js
import { Model } from "objection"

export class Category extends Model {
  static get tableName() { return "categories" }

  static get relationMappings() {
    const { Product } = require("./Product")
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: { from: "categories.id", to: "products.category_id" }
      }
    }
  }
}
