import { Model } from "objection"

export class YoukyoukOrder extends Model {
  static get tableName() { return "orders" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    const { YoukyoukCustomer } = require("./YoukyoukCustomer")
    const { YoukyoukOrderItem } = require("./YoukyoukOrderItem")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "orders.seller_id", to: "sellers.id" } },
      customer: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukCustomer, join: { from: "orders.customer_id", to: "customers.id" } },
      items: { relation: Model.HasManyRelation, modelClass: YoukyoukOrderItem, join: { from: "orders.id", to: "order_items.order_id" } }
    }
  }
}
