import { Model } from "objection"

export class Payment extends Model {
  static get tableName() {
    return "payments"
  }

  static get relationMappings() {
    const { Order } = require("./Order")
    const { PaymentMethod } = require("./PaymentMethod")

    return {
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: "payments.order_id",
          to: "orders.id",
        },
      },
      method: {
        relation: Model.BelongsToOneRelation,
        modelClass: PaymentMethod,
        join: {
          from: "payments.payment_method_id",
          to: "payment_methods.id",
        },
      },
    }
  }
}
