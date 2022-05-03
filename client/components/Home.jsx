import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  const yePhoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28cropped%29.jpg/800px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28cropped%29.jpg'
  const trav = 'https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-018166785ff8ed3e47c6e014e0f58618be107ddf-s1100-c50.jpg'
  const twice = 'https://static.toiimg.com/photo/msid-85096661/85096661.jpg'
  return (
    <div className='home' style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <Link to='/kanye'>
        <div>
          <h1>Kanye</h1>
          <img src={yePhoto} alt="" style={{ width: '450px', height: '500px', objectFit: 'cover', borderRadius: '20%' }}/>
        </div>
      </Link>
      <Link to='/travis'>
        <div>
          <h1>Travis</h1>
          <img src={trav} alt="" style={{ width: '450px', height: '500px', objectFit: 'cover', borderRadius: '20%' }}/>
        </div>
      </Link>
      <Link to='/twice'>
        <div>
          <h1>Twice</h1>
          <img src={twice} alt="" style={{ width: '450px', height: '500px', objectFit: 'cover', borderRadius: '20%' }}/>
        </div>
      </Link>
    </div>

  )
}

export default Home
