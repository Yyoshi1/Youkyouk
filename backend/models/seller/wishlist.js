import { Model } from "objection"

export class Wishlist extends Model {
  static get tableName() { return "wishlists" }

  static get relationMappings() {
    const { Customer } = require("./Customer")
    const { Product } = require("./Product")
    return {
      customer: { relation: Model.BelongsToOneRelation, modelClass: Customer, join: { from: "wishlists.user_id", to: "customers.id" } },
      products: { relation: Model.HasManyRelation, modelClass: Product, join: { from: "wishlists.product_id", to: "products.id" } }
    }
  }
}
