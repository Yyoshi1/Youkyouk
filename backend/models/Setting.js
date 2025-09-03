import { Model } from "objection"

export class Setting extends Model {
  static get tableName() {
    return "settings"
  }
}
