import React from 'react'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'

import { useSelector } from 'react-redux'

function Home() {
  const { allMovies,searchData } = useSelector((store) => {
    return store.movies
  })
  //console.log('from home ')
  //console.log(allMovies)
  console.log(searchData)



  return (
    <div>

      <Banner />
      <RowPost movieData={allMovies ? allMovies[0] : ''} title='Trending' />
      <RowPost movieData={allMovies ? allMovies[1] : ''} title='Netflix Originals' isSmall />
      <RowPost movieData={allMovies ? allMovies[2] : ''} title='Action' isSmall />
      <RowPost movieData={allMovies ? allMovies[3] : ''} title='Horror' isSmall />
      <RowPost movieData={allMovies ? allMovies[4] : ''} title='Romance' isSmall />
      {/* <RowPost movieData={allMovies ? allMovies[5] : ''} title='Romance' isSmall /> */}
    </div>
  )
}

export default Home