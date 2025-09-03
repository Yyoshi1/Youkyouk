export async function up(knex) {
  await knex.schema.createTable("payments", (table) => {
    table.increments("id").primary()
    table
      .integer("order_id")
      .unsigned()
      .references("id")
      .inTable("orders")
      .onDelete("CASCADE")
    table
      .integer("payment_method_id")
      .unsigned()
      .references("id")
      .inTable("payment_methods")
    table.decimal("amount", 10, 2).notNullable()
    table.enum("status", ["pending", "paid", "failed"]).defaultTo("pending")
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("payments")
}
