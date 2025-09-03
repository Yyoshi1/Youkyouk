export async function up(knex) {
  await knex.schema.createTable("payment_methods", (table) => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.json("config")
    table.boolean("active").defaultTo(true)
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("payment_methods")
}
