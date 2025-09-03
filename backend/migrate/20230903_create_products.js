export async function up(knex) {
  await knex.schema.createTable("products", (table) => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.text("description")
    table.decimal("price", 10, 2).notNullable()
    table.integer("stock").defaultTo(0)
    table
      .integer("vendor_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("products")
}
