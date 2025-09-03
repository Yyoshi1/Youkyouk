export async function up(knex) {
  await knex.schema.createTable("roles", (table) => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.jsonb("permissions").defaultTo("{}")
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("roles")
}
