export async function up(knex) {
  await knex.schema.createTable("orders", (table) => {
    table.increments("id").primary()
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.decimal("total_price", 10, 2).notNullable()
    table.enum("status", ["pending", "paid", "shipped", "completed", "canceled"]).defaultTo("pending")
    table.timestamp("placed_at").defaultTo(knex.fn.now())
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("orders")
}
