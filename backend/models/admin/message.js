import { Model } from "objection"

export class Message extends Model {
  static get tableName() { return "messages" }

  static get relationMappings() {
    const { Admin } = require("./Admin")
    const { Customer } = require("./Customer")

    return {
      admin: { relation: Model.BelongsToOneRelation, modelClass: Admin, join: { from: "messages.admin_id", to: "admins.id" } },
      customer: { relation: Model.BelongsToOneRelation, modelClass: Customer, join: { from: "messages.customer_id", to: "customers.id" } },
    }
  }
}
