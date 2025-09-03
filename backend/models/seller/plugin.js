import { Model } from "objection"

export class Plugin extends Model {
  static get tableName() { return "plugins" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "plugins.seller_id", to: "sellers.id" } }
    }
  }
}
