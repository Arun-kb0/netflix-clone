import React from 'react'
import './RowPost.css'
import { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constant'
import YouTube from 'react-youtube'


function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    setMovies(props.movieData)
    console.log('row post')
    console.log(movies ? movies[0] : '')
  })

  

  //react youtube options
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  //for playing movie videos on youtube 
  const handleMovie = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      //console.log(response.data)
      if (response.data.results.length != 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log('Array empty')
      }
    })
  }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies ?
          movies.map((obj) =>
            <div className='box'>
              <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? "samllPoster" : "poster"} src={`${imageUrl + obj.poster_path}`} />
              <p className={props.isSmall ? 'small-poster-text' : 'poster-text'}>{obj.overview}</p>
            </div>

          )
          : console.log('loading........')
        }
      </div>
      <div>
        {urlId && <YouTube opts={opts} videoId={urlId.key} />}
      </div>
    </div>
  )
}

export default RowPost