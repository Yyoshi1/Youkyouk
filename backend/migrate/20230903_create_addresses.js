export async function up(knex) {
  await knex.schema.createTable("addresses", (table) => {
    table.increments("id").primary()
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
    table.string("country").notNullable()
    table.string("city").notNullable()
    table.string("zip").notNullable()
    table.string("address_line").notNullable()
    table.string("phone")
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("addresses")
}
