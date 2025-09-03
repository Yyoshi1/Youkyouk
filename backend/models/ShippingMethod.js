import { Model } from "objection"

export class ShippingMethod extends Model {
  static get tableName() {
    return "shipping_methods"
  }
}
