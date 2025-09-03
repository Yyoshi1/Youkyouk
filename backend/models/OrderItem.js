import { Model } from "objection"

export class OrderItem extends Model {
  static get tableName() {
    return "order_items"
  }

  static get relationMappings() {
    const { Order } = require("./Order")
    const { Product } = require("./Product")

    return {
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: "order_items.order_id",
          to: "orders.id",
        },
      },
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: "order_items.product_id",
          to: "products.id",
        },
      },
    }
  }
}
