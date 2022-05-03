exports.up = function (knex) {
  return knex.schema.createTable('twice', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('album_title')
    table.integer('release_year')
    table.string('genre')
    table.integer('tracklist')
    table.integer('length')
    table.string('cover_image')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('twice')
}
