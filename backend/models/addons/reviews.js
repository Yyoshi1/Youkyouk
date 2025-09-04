import { Model } from "objection"
export class Reviews extends Model {
  static get tableName() { return "reviews_addon" }
}
