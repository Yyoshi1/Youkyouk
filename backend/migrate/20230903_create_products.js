export async function up(knex) {
  await knex.schema.createTable("products", (table) => {
    table.increments("id").primary()
    table.integer("user_id").references("id").inTable("users").onDelete("SET NULL")
    table.string("title").notNullable()
    table.string("slug").unique().notNullable()
    table.text("description")
    table.decimal("price", 10, 2).notNullable()
    table.integer("stock").defaultTo(0)
    table.enum("status", ["draft", "active", "inactive"]).defaultTo("draft")
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("products")
}
