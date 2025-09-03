export async function up(knex) {
  await knex.schema.createTable("categories", (table) => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.integer("parent_id").references("id").inTable("categories").onDelete("CASCADE")
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("categories")
}
