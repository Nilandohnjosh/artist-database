import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import { getKanye } from '../apis/kanye'
import { getAllKanye } from '../actions/kanye'

function Kanye () {
  const dispatch = useDispatch()
  const kanye = useSelector(state => state.kanyeReducer)

  useEffect(() => {
    dispatch(getAllKanye())
  }, [])

  return (
    <div>
      {kanye.map(ye => (
        <div key={ye.id}>
          <h1>{ye.name}</h1>
          <p>{ye.album_title}</p>
          {/* <img src={ye.cover_image} alt="" /> */}
        </div>
      ))}
    </div>
  )
}

export default Kanye
