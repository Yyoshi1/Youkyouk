import { Model } from "objection"

export class YoukyoukMessage extends Model {
  static get tableName() { return "messages" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "messages.seller_id", to: "sellers.id" } }
    }
  }
}
