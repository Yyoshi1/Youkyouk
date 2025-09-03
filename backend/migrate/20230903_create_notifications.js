export async function up(knex) {
  await knex.schema.createTable("notifications", (table) => {
    table.increments("id").primary()
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.string("title").notNullable()
    table.text("body").notNullable()
    table.boolean("read").defaultTo(false)
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("notifications")
}
