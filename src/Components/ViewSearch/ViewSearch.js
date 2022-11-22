import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import { API_KEY, imageUrl } from '../../constants/constant'
import axios from '../../axios'


import './ViewSearch.css'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'
import { useNavigate } from 'react-router-dom'


function ViewSearch() {
    const { allMovies, searchIn, searchStatus } = useSelector((state) => {
        console.log(state.movies)
        return state.movies
    })
    console.log('from viewsearch searchMovies')
    console.log(searchIn)

    const [searchMovies, setSearchMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    const [Tmp, setTmp] = useState('')


    const navigate = useNavigate()

    useEffect(() => {
        if (searchStatus) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchIn}&page=1&include_adult=false`)
                .then((resp) => {
                    setSearchMovies(resp.data.results)
                })
                .catch((error) => {
                    console.log('axios error')
                    console.log(error)
                })
            console.log('tmp== block')

        } else {
            navigate('/')
        }
    }, [searchIn])

    console.log(searchMovies)

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

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
        <div className='search-data'>
            <div className="posters">
                {searchMovies ?
                    searchMovies.map((obj) =>
                        <div className='box'>
                            <img onClick={() => handleMovie(obj.id)} className="samllPoster" src={`${imageUrl + obj.poster_path}`} />
                            <p className='small-poster-text'>{obj.overview}</p>
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

export default ViewSearch