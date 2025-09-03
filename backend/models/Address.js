import { Model } from "objection"

export class Address extends Model {
  static get tableName() {
    return "addresses"
  }

  static get relationMappings() {
    const { User } = require("./User")

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "addresses.user_id",
          to: "users.id",
        },
      },
    }
  }
}
