import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { User } from "../../user/models/User"
import { Product } from "../../product/models/Product"
import { Order } from "../../order/models/Order"
import { Promotion } from "../../promotion/models/Promotion"
import { Notification } from "../../notification/models/Notification"
import { Message } from "../../message/models/Message"
import { Settings } from "./Settings"

@Entity()
export class Seller {
  @PrimaryGeneratedColumn("uuid")
  id

  @ManyToOne(() => User, user => user.sellers)
  user

  @Column()
  storeName

  @Column({ nullable: true })
  logo

  @Column({ nullable: true })
  banner

  @Column({ type: "text", nullable: true })
  description

  @Column()
  country

  @Column({ default: "MAD" })
  currency

  @OneToMany(() => Product, product => product.seller)
  products

  @OneToMany(() => Order, order => order.seller)
  orders

  @OneToMany(() => Promotion, promotion => promotion.seller)
  promotions

  @OneToMany(() => Notification, notification => notification.seller)
  notifications

  @OneToMany(() => Message, message => message.seller)
  messages

  @OneToOne(() => Settings)
  @JoinColumn()
  settings

  @Column({ default: "pending" })
  status
}
