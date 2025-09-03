import { Model } from "objection"

export class Promotion extends Model {
  static get tableName() { return "promotions" }

  static get relationMappings() {
    const { Product } = require("./Product")
    const { Admin } = require("./Admin")

    return {
      product: { relation: Model.BelongsToOneRelation, modelClass: Product, join: { from: "promotions.product_id", to: "products.id" } },
      admin: { relation: Model.BelongsToOneRelation, modelClass: Admin, join: { from: "promotions.admin_id", to: "admins.id" } },
    }
  }
}
