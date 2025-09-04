import { Model } from "objection"

export class YoukyoukNotification extends Model {
  static get tableName() { return "notifications" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "notifications.seller_id", to: "sellers.id" } }
    }
  }
}
