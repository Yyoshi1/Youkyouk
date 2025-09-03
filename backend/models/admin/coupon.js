// backend/models/admin/Coupon.js
import { Model } from "objection"

export class Coupon extends Model {
  static get tableName() { return "coupons" }

  static get relationMappings() {
    const { Order } = require("./Order")
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: Order,
        join: { from: "coupons.id", to: "orders.coupon_id" }
      }
    }
  }
}
