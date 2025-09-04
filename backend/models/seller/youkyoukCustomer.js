import { Model } from "objection"

export class YoukyoukCustomer extends Model {
  static get tableName() { return "customers" }

  static get relationMappings() {
    const { YoukyoukOrder } = require("./YoukyoukOrder")
    const { YoukyoukSeller } = require("./YoukyoukSeller")

    return {
      orders: { relation: Model.HasManyRelation, modelClass: YoukyoukOrder, join: { from: "customers.id", to: "orders.customer_id" } },
      sellers: { relation: Model.ManyToManyRelation, modelClass: YoukyoukSeller, join: {
        from: "customers.id",
        through: { from: "customer_sellers.customer_id", to: "customer_sellers.seller_id" },
        to: "sellers.id"
      }}
    }
  }
}
