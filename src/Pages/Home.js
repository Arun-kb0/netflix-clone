import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import { originals, action, horror, trending, romance } from '../urls'

import { useSelector } from 'react-redux'

function Home() {
  const { allMovies } = useSelector((state) => {
    return state.movies
  }) 
  console.log('from home ')
  console.log(allMovies)



  return (
    <div>

      <Banner />
      <RowPost movieData={allMovies[0]} title='Trending' />
      <RowPost movieData={allMovies[1]} title='Trending' />
      <RowPost movieData={allMovies[2]} title='Netflix Originals' isSmall />
      <RowPost movieData={allMovies[3]} title='Action' isSmall />
      <RowPost movieData={allMovies[4]} title='Horror' isSmall />
      <RowPost movieData={allMovies[5]} title='Romance' isSmall />
    </div>
  )
}

export default Home