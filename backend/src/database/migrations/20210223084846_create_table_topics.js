
exports.up = function(knex) {
    return knex.schema.createTable('topics', table => {
        table.increments('id')
        table.text('title').notNullable()
        table.text('subject').notNullable()
        table.text('course').notNullable()
        table.text('content').notNullable()
        table.integer('monitorId').unsigned().notNullable()
        table.foreign('monitorId').references('id').inTable('monitors')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('topics')
};
