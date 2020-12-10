
exports.up = function(knex) {
  return knex.schema.createTable('topics', (table) => {
    table.increments('id')
    table.text('title').notNullable()
    table.text('subject').notNullable()
    table.text('course').notNullable()
    table.text('author').notNullable()
    table.text('content').notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('topics')
};
