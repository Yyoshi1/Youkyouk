import { Model } from "objection"

export class Product extends Model {
  static get tableName() { return "products" }

  static get relationMappings() {
    const { Admin } = require("./Admin")
    const { Review } = require("./Review")
    const { Promotion } = require("./Promotion")
    const { OrderItem } = require("./OrderItem")

    return {
      admin: { relation: Model.BelongsToOneRelation, modelClass: Admin, join: { from: "products.admin_id", to: "admins.id" } },
      reviews: { relation: Model.Has
