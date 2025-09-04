import { Model } from "objection"

export class YoukyoukOrder extends Model {
  static get tableName() { return "youkyouk_orders" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    const { YoukyoukCustomer } = require("./YoukyoukCustomer")
    const { YoukyoukOrderItem } = require("./YoukyoukOrderItem")
    const { YoukyoukPayment } = require("./YoukyoukPayment")
    
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "youkyouk_orders.seller_id", to: "youkyouk_sellers.id" } },
      customer: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukCustomer, join: { from: "youkyouk_orders.customer_id", to: "youkyouk_customers.id" } },
      items: { relation: Model.HasManyRelation, modelClass: YoukyoukOrderItem, join: { from: "youkyouk_orders.id", to: "youkyouk_order_items.order_id" } },
      payments: { relation: Model.HasManyRelation, modelClass: YoukyoukPayment, join: { from: "youkyouk_orders.id", to: "youkyouk_payments.order_id" } }
    }
  }
}
