import { Model } from "objection"

export class Cart extends Model {
  static get tableName() { return "carts" }

  static get relationMappings() {
    const { Customer } = require("./Customer")
    const { Product } = require("./Product")
    return {
      customer: { relation: Model.BelongsToOneRelation, modelClass: Customer, join: { from: "carts.user_id", to: "customers.id" } },
      products: { relation: Model.HasManyRelation, modelClass: Product, join: { from: "carts.product_id", to: "products.id" } }
    }
  }
}
