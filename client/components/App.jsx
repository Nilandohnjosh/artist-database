import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Kanye from './Kanye'
import Home from './Home'

function App () {
  const kanye = useSelector(state => state.kanyeReducer)

  return (
    <>
      <header className="header">
        <h1>The Artist Database</h1>
      </header>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kanye/" element={<Kanye />} />
        </Routes>
        {/* add your code here */}
      </div>
    </>
  )
}

export default App
