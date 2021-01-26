
exports.up = function(knex) {
  return knex.schema.createTable('classes', table => {
      table.increments('id')
      table.text('email').notNullable()
      table.text('name').notNullable()
      table.text('phone').notNullable()
      table.text('subject').notNullable()
      table.text('topic').notNullable()
      table.text('year').notNullable()
      table.text('ra').notNullable()
  }) 
};

exports.down = knex => knex.schema.dropTable('classes');
