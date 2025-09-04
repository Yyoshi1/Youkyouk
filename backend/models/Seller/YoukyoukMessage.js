import { Model } from "objection"

export class YoukyoukMessage extends Model {
  static get tableName() { return "youkyouk_messages" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "youkyouk_messages.seller_id", to: "youkyouk_sellers.id" } }
    }
  }
}
