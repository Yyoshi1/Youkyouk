import { Model } from 'objection'
import { Product } from './Product'

export class Coupon extends Model {
  static tableName = 'coupons'

  static relationMappings = {
    products: {
      relation: Model.ManyToManyRelation,
      modelClass: Product,
      join: {
        from: 'coupons.id',
        through: { from: 'coupon_products.coupon_id', to: 'coupon_products.product_id' },
        to: 'products.id'
      }
    }
  }
}
