import { Model } from "objection"

export class ActivityLog extends Model {
  static get tableName() {
    return "activity_logs"
  }

  static get relationMappings() {
    const { User } = require("./User")

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "activity_logs.user_id",
          to: "users.id",
        },
      },
    }
  }
}
