import { Model } from "objection"

export class Product extends Model {
  static get tableName() {
    return "products"
  }

  static get relationMappings() {
    const { User } = require("./User")
    const { OrderItem } = require("./OrderItem")

    return {
      vendor: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "products.vendor_id",
          to: "users.id",
        },
      },
      orderItems: {
        relation: Model.HasManyRelation,
        modelClass: OrderItem,
        join: {
          from: "products.id",
          to: "order_items.product_id",
        },
      },
    }
  }
}
