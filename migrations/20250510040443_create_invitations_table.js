/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('invitations', function (table) {
    table.increments('id').primary()
    table
      .integer('guest_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('guests')
      .onDelete('CASCADE')
    table.string('code').notNullable().unique()
    table
      .enu('status', ['pending', 'confirmed', 'checked_in'])
      .defaultTo('pending')
    table.timestamp('checked_in_at').nullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('invitations')
}
