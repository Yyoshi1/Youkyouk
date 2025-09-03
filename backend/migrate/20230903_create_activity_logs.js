export async function up(knex) {
  await knex.schema.createTable("activity_logs", (table) => {
    table.increments("id").primary()
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("SET NULL")
    table.string("action").notNullable()
    table.json("meta")
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("activity_logs")
}
