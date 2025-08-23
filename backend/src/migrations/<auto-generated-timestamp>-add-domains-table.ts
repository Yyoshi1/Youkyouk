import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDomainsTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "domain" (
        "id" character varying NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP,
        "domain_name" character varying NOT NULL,
        "model_type" character varying NOT NULL DEFAULT 'b2c',
        "is_active" boolean NOT NULL DEFAULT true,
        CONSTRAINT "PK_domain_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "domain"`);
  }
}
