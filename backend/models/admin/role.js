import { Model } from "objection"

export class Role extends Model {
  static get tableName() { return "roles" }
}
