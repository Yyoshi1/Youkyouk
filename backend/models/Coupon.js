import { Model } from "objection"

export class Coupon extends Model {
  static get tableName() {
    return "coupons"
  }
}
