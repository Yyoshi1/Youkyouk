export async function up(knex) {
  await knex.schema.createTable("shipments", (table) => {
    table.increments("id").primary()
    table.integer("order_id").references("id").inTable("orders").onDelete("CASCADE")
    table.string("tracking_number")
    table.string("status").defaultTo("preparing")
    table.timestamp("shipped_at")
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("shipments")
}
