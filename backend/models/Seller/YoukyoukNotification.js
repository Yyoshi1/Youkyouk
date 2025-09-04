import { Model } from "objection"

export class YoukyoukNotification extends Model {
  static get tableName() { return "youkyouk_notifications" }

  static get relationMappings() {
    const { YoukyoukSeller } = require("./YoukyoukSeller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: YoukyoukSeller, join: { from: "youkyouk_notifications.seller_id", to: "youkyouk_sellers.id" } }
    }
  }
}
