exports.up = function (knex) {
  return knex.schema.createTable('kanye', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('album_title')
    table.integer('release_year')
    table.string('genre')
    table.integer('tracklist')
    table.integer('length')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('kanye')
}
