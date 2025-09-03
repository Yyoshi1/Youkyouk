// backend/models/admin/Module.js
import { Model } from "objection"

export class Module extends Model {
  static get tableName() { return "modules" }

  static get relationMappings() {
    const { Product } = require("./Product")
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: { from: "modules.id", to: "products.module_id" }
      }
    }
  }
}
