import { Model } from "objection"

export class Seller extends Model {
  static get tableName() { return "sellers" }

  static get relationMappings() {
    const { Product } = require("./Product")
    const { Order } = require("./Order")
    const { Customer } = require("./Customer")
    const { Promotion } = require("./Promotion")
    const { Review } = require("./Review")
    const { Notification } = require("./Notification")
    const { Message } = require("./Message")
    const { Settings } = require("./Settings")
    const { Shipping } = require("./Shipping")
    const { PaymentMethod } = require("./PaymentMethod")
    const { Analytics } = require("./Analytics")
    const { Category } = require("./Category")

    return {
      products: { 
        relation: Model.HasManyRelation, 
        modelClass: Product, 
        join: { from: "sellers.id", to: "products.seller_id" } 
      },
      orders: { 
        relation: Model.HasManyRelation, 
        modelClass: Order, 
        join: { from: "sellers.id", to: "orders.seller_id" } 
      },
      customers: {
        relation: Model.HasManyRelation,
        modelClass: Customer,
        join: { from: "sellers.id", to: "customers.seller_id" }
      },
      promotions: { 
        relation: Model.HasManyRelation, 
        modelClass: Promotion, 
        join: { from: "sellers.id", to: "promotions.seller_id" } 
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: { from: "sellers.id", to: "reviews.seller_id" }
      },
      notifications: { 
        relation: Model.HasManyRelation, 
        modelClass: Notification, 
        join: { from: "sellers.id", to: "notifications.seller_id" } 
      },
      messages: { 
        relation: Model.HasManyRelation, 
        modelClass: Message, 
        join: { from: "sellers.id", to: "messages.seller_id" } 
      },
      settings: { 
        relation: Model.HasOneRelation, 
        modelClass: Settings, 
        join: { from: "sellers.id", to: "settings.seller_id" } 
      },
      shippings: { 
        relation: Model.HasManyRelation, 
        modelClass: Shipping, 
        join: { from: "sellers.id", to: "shippings.seller_id" } 
      },
      paymentMethods: { 
        relation: Model.HasManyRelation, 
        modelClass: PaymentMethod, 
        join: { from: "sellers.id", to: "payment_methods.seller_id" } 
      },
      analytics: { 
        relation: Model.HasOneRelation, 
        modelClass: Analytics, 
        join: { from: "sellers.id", to: "analytics.seller_id" } 
      },
      categories: {
        relation: Model.HasManyRelation,
        modelClass: Category,
        join: { from: "sellers.id", to: "categories.seller_id" }
      }
    }
  }
}
