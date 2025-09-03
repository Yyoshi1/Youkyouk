export async function up(knex) {
  await knex.schema.createTable("coupons", (table) => {
    table.increments("id").primary()
    table.string("code").unique().notNullable()
    table.decimal("discount", 10, 2).notNullable()
    table.enum("type", ["percentage", "fixed"]).defaultTo("fixed")
    table.date("valid_from")
    table.date("valid_to")
    table.boolean("active").defaultTo(true)
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("coupons")
}
