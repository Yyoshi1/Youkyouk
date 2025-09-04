import { Model } from "objection"

export class YoukyoukMessage extends Model {
  static get tableName() { return "messages" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    const { YoukyoukCustomer } = require("./YoukyoukCustomer")

    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "messages.seller_id", to: "sellers.id" } },
      customer: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukCustomer, join: { from: "messages.customer_id", to: "customers.id" } }
    }
  }
}
