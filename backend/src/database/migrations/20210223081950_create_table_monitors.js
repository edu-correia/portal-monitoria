
exports.up = function(knex) {
    return knex.schema.createTable('monitors', table => {
        table.increments('id').unsigned().notNullable().primary()
        table.string('RA', 7).notNullable().unique()
        table.text('name').notNullable()
        table.text('course').notNullable()
        table.string('email', 60).notNullable().unique()
        table.text('password').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('monitors')
};
