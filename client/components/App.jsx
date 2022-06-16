import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Kanye from './Kanye'
import Home from './Home'
import KanyeAlbums from './KanyeAlbums'
import Nav from './Nav'

function App () {
  return (
    <>
      <header className="header">
        <Link to='/'>
          <h1>The Artist Database</h1>
        </Link>
        <Nav />
      </header>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kanye/" element={<Kanye />} />
          <Route path='/kanye/:id' element={<KanyeAlbums />} />
        </Routes>
      </div>
    </>
  )
}

export default App
