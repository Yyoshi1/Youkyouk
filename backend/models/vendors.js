import { Model } from 'objection'
import { User } from './User'
import { Product } from './Product'

export class Vendor extends Model {
  static tableName = 'vendors'

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: { from: 'vendors.user_id', to: 'users.id' }
    },
    products: {
      relation: Model.HasManyRelation,
      modelClass: Product,
      join: { from: 'vendors.id', to: 'products.vendor_id' }
    }
  }
}
