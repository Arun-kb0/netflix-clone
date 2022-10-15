import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constant'
import YouTube from 'react-youtube'


function Banner() {
  const [movie, setMovie] = useState()
  const [urlId, setUrlId] = useState('')
  const [viewVideo, setViewVideo] = useState('')

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((respose) => {
      console.log(respose.data.results[0])
      setMovie(respose.data.results[0])
    })
  }, [])


  //react youtube options
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  //for playing movie videos on youtube 
  const handleMovie = (id) => {

    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      console.log(response.data)
      if (response.data.results.length != 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log('Array empty')
      }
    })
  }

  


  return (
    <div>
      <div
        style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
      >
        <div className='banner'>
          <div className='content'>
            <h1 className='title'>{movie ? movie.title : '' }</h1>
            
            <div className='banner-buttons'>
              <button className='button' onClick={()=>{
                setViewVideo(1)
                return movie ? handleMovie(movie.id): "" 
              } /*movie ? handleMovie(movie.id): "" */} >Play</button>
              <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : ""}</h1>
          </div>
          <div className="fade_bottom">

          </div>
        </div>
      </div>
      <div className='banner-movie' style={viewVideo ? {display:'block'} : {display:'none'}} >
        {urlId && <YouTube opts={opts} videoId={urlId.key} />}
      </div>


    </div>

  )
}

export default Banner