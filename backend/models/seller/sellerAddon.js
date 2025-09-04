import { Model } from "objection"
import knex from "../../db/knex.js"

Model.knex(knex)

export class SellerAddon extends Model {
  static get tableName() {
    return "seller_addons"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string" },
        enabled: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
      },
    }
  }
}
