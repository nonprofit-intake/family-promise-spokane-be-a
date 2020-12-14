// Notes can be about entire families or specify users however notes are tied to the family table
// This makes it so admins can search notes by family id
exports.up = function (knex) {
  return knex.schema.createTable('notes', (tbl) => {
    tbl.increments();
    tbl
      .integer('family_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('families')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE');

    tbl
      .integer('author_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE');

    tbl.string('subject').notNullable();

    tbl.string('content').notNullable();

    tbl.date('date');

    tbl.datetime('time');
  });
};

exports.down = function (knex) {};
