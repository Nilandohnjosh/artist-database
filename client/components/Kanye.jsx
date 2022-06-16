import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import KanyeAlbums from './KanyeAlbums'

// import { getKanye } from '../apis/kanye'
import { getAllKanye } from '../actions/kanye'

function Kanye (props) {
  const dispatch = useDispatch()
  const kanye = useSelector(state => state.kanyeReducer)

  useEffect(() => {
    dispatch(getAllKanye())
  }, [])

  return (
    <div className='album-list'>
      {kanye.map((ye, i) => (
        <Link to={`/kanye/${ye.id}`} key={i}>
          <div className='album'>
            <h1>{ye.album_title}</h1>
            <img src={ye.cover_image} alt="" className='covers'/>
          </div>
          {/* <KanyeAlbums /> */}
          {/* <KanyeAlbums name={ye.name} album_title={ye.album_title} genre={ye.genre}
            cover_image={ye.image} length={ye.length} release_year={ye.release_year} tracklist={ye.tracklist} /> */}
        </Link>
      ))}
    </div>
  )
}

export default Kanye
