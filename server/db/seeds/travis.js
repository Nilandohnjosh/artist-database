exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('travis')
    .del()
    .then(() => {
      return knex('travis').insert([
        {
          id: 1,
          name: 'Travis Scott',
          album_title: 'Owl Pharoah',
          release_year: 2013,
          genre: 'hip-hop',
          tracklist: 13,
          length: 51.34,
        },
        {
          id: 2,
          name: 'Travis Scott',
          album_title: 'Days Before Rodeo',
          release_year: 2014,
          genre: 'hip-hop',
          tracklist: 12,
          length: 50.02,
        },
        {
          id: 3,
          name: 'Travis Scott',
          album_title: 'Rodeo',
          release_year: 2015,
          genre: 'hip-hop',
          tracklist: 16,
          length: 65.26,
        },
        {
          id: 4,
          name: 'Travis Scott',
          album_title: 'Birds in the Trap Sing McKnight',
          release_year: 2016,
          genre: 'hip-hop',
          tracklist: 14,
          length: 53.38,
        },
        {
          id: 5,
          name: 'Travis Scott',
          album_title: 'Huncho Jack, Jack Huncho',
          release_year: 2017,
          genre: 'hip-hop',
          tracklist: 13,
          length: 41.34,
        },
        {
          id: 6,
          name: 'Travis Scott',
          album_title: 'Astroworld',
          release_year: 2018,
          genre: 'hip-hop',
          tracklist: 17,
          length: 58.33,
        },
        {
          id: 7,
          name: 'Travis Scott',
          album_title: 'JackBoys',
          release_year: 2019,
          genre: 'hip-hop',
          tracklist: 7,
          length: 21.22,
        },
      ])
    })
}
