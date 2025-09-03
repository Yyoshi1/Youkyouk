export async function up(knex) {
  await knex.schema.createTable("order_items", (table) => {
    table.increments("id").primary()
    table
      .integer("order_id")
      .unsigned()
      .references("id")
      .inTable("orders")
      .onDelete("CASCADE")
    table
      .integer("product_id")
      .unsigned()
      .references("id")
      .inTable("products")
      .onDelete("CASCADE")
    table.integer("quantity").notNullable()
    table.decimal("price", 10, 2).notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("order_items")
}
