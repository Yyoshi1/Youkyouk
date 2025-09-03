// backend/models/admin/Analytics.js
import { Model } from "objection"

export class Analytics extends Model {
  static get tableName() { return "analytics" }

  static get relationMappings() {
    const { Order } = require("./Order")
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: Order,
        join: { from: "analytics.id", to: "orders.analytics_id" }
      }
    }
  }
}
