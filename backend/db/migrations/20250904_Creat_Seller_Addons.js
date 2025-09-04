export async function up(knex) {
  await knex.schema.createTable("seller_addons", (table) => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.text("description")
    table.boolean("enabled").defaultTo(false)
    table.timestamp("created_at").defaultTo(knex.fn.now())
  })
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("seller_addons")
}
