export async function up(knex) {
  await knex.schema.createTable("payments", (table) => {
    table.increments("id").primary()
    table.integer("order_id").references("id").inTable("orders").onDelete("CASCADE")
    table.string("payment_method").notNullable()
    table.string("status").defaultTo("pending")
    table.string("transaction_id")
    table.decimal("amount", 10, 2).notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("payments")
}
