import { Model } from "objection"

export class YoukyoukPageLayout extends Model {
  static get tableName() { return "youkyouk_page_layouts" }

  static get relationMappings() {
    const { YoukyoukAddon } = require("./YoukyoukAddon")
    return {
      addons: {
        relation: Model.HasManyRelation,
        modelClass: YoukyoukAddon,
        join: { from: "youkyouk_page_layouts.id", to: "youkyouk_addons.page_layout_id" }
      }
    }
  }
}
