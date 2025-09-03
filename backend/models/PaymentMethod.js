import { Model } from "objection"

export class PaymentMethod extends Model {
  static get tableName() {
    return "payment_methods"
  }

  static get relationMappings() {
    const { Payment } = require("./Payment")

    return {
      payments: {
        relation: Model.HasManyRelation,
        modelClass: Payment,
        join: {
          from: "payment_methods.id",
          to: "payments.payment_method_id",
        },
      },
    }
  }
}
