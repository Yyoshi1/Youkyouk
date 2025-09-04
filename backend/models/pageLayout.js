import { Model } from "objection"

export class PageLayout extends Model {
  static get tableName() { return "page_layouts" }

  static get relationMappings() {
    const { Addon } = require("./Addon")
    return {
      addons: {
        relation: Model.HasManyRelation,
        modelClass: Addon,
        join: { from: "page_layouts.id", to: "addons.page_layout_id" }
      }
    }
  }
}
