const conn = require('./connection')

function getYe(db = conn) {
  return db('kanye').select()
}

module.exports = {
  getYe,
}
