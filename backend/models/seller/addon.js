import { Model } from "objection"

export class Addon extends Model {
  static get tableName() { return "addons" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "addons.seller_id", to: "sellers.id" } },
    }
  }
}
