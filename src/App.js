import React from 'react'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import {originals,action,horror,trending,romance} from './urls'

function App() {
  return (
    <div className='App'>
      <NavBar/>

      <Banner/>
      <RowPost url={trending} title='Trending' />
      <RowPost url={originals} title='Netflix Originals' isSmall/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      
     
    </div>
  )
}

export default App