import { Model } from "objection"

export class User extends Model {
  static get tableName() {
    return "users"
  }

  static get relationMappings() {
    const { Product } = require("./Product")
    const { Order } = require("./Order")
    const { Address } = require("./Address")
    const { ActivityLog } = require("./ActivityLog")

    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: {
          from: "users.id",
          to: "products.vendor_id",
        },
      },
      orders: {
        relation: Model.HasManyRelation,
        modelClass: Order,
        join: {
          from: "users.id",
          to: "orders.user_id",
        },
      },
      addresses: {
        relation: Model.HasManyRelation,
        modelClass: Address,
        join: {
          from: "users.id",
          to: "addresses.user_id",
        },
      },
      logs: {
        relation: Model.HasManyRelation,
        modelClass: ActivityLog,
        join: {
          from: "users.id",
          to: "activity_logs.user_id",
        },
      },
    }
  }
}
