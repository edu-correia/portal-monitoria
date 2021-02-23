
exports.up = function(knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id')
        table.text('name')
        table.text('ra')
        table.text('email')
        table.text('phone')
        table.text('course')
        table.text('topic')
        table.text('year')
        table.boolean('showedUp')
        table.text('date').notNullable()
        table.integer('monitorId').unsigned().notNullable()
        table.foreign('monitorId').references('id').inTable('monitors')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('classes')
};
