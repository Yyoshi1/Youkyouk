export async function up(knex) {
  await knex.schema.createTable("shipping_methods", (table) => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.decimal("cost", 10, 2).defaultTo(0)
    table.boolean("active").defaultTo(true)
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("shipping_methods")
}
