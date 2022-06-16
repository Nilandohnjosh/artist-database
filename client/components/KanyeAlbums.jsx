import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

// import { getAllKanye } from '../actions/kanye'
// ({ name, album_title, genre, cover_image, length, release_year, tracklist })
function KanyeAlbums ({ name, album_title, genre, cover_image, length, release_year, tracklist }) {
// const dispatch = useDispatch()
  const { id } = useParams()
  const kanye = useSelector((state) => state.kanyeReducer)
  const ye = kanye.find((ye) => ye.id === Number(id))
  return (
    <div className='album'>
      <h1>{ye.album_title}</h1>
      <img src={ye.cover_image} alt="" className='covers'/>
      <p>Release Year: {ye.release_year}</p>
      <p>Genre: {ye.genre}</p>
      <p>Tracklist: {ye.tracklist}</p>
      <p>Length: {ye.length}</p>

    </div>
  )
}

export default KanyeAlbums
