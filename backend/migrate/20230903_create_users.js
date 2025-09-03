export async function up(knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.string("email").unique().notNullable()
    table.string("password").notNullable()
    table.enum("role", ["admin", "vendor", "customer"]).defaultTo("customer")
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTable("users")
}
