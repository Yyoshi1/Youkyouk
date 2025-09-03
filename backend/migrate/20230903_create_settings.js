export async function up(knex) {
  await knex.schema.createTable("settings", (table) => {
    table.increments("id").primary()
    table.string("key").unique().notNullable()
    table.string("value").notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("settings")
}
