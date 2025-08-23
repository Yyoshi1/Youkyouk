import { BaseEntity } from "@medusajs/medusa";
import { Column, Entity } from "typeorm";

@Entity()
export class Domain extends BaseEntity {
  @Column()
  domain_name: string;

  @Column({ default: "b2c" }) // b2b, c2c, b2c
  model_type: string;

  @Column({ default: true })
  is_active: boolean;
}
