import { Model } from "objection"

export class YoukyoukCustomer extends Model {
  static get tableName() { return "customers" }

  static get relationMappings() {
    const { YoukyoukOrder } = require("./YoukyoukOrder")
    return {
      orders: { relation: Model.HasManyRelation, modelClass: YoukyoukOrder, join: { from: "customers.id", to: "orders.customer_id" } }
    }
  }
}
