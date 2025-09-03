import { Model } from "objection"

export class Message extends Model {
  static get tableName() { return "messages" }

  static get relationMappings() {
    const { Seller } = require("./Seller")
    const { User } = require("../../User")
    return {
      seller: { relation: Model.BelongsToOneRelation, modelClass: Seller, join: { from: "messages.seller_id", to: "sellers.id" } },
      user: { relation: Model.BelongsToOneRelation, modelClass: User, join: { from: "messages.user_id", to: "users.id" } }
    }
  }
}
