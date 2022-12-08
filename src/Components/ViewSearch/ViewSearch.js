import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import { API_KEY, imageUrl } from '../../constants/constant'
import axios from '../../axios'
import { AiOutlinePlus } from 'react-icons/ai'

import './ViewSearch.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToList } from '../../feature/collection/collectionSlice'


function ViewSearch() {

    const {  searchIn, searchStatus } = useSelector((state) => {
        console.log(state.movies)
        return state.movies
    })


    const [searchMovies, setSearchMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    const [arrayEmpty, setArrayEmpty] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (searchStatus) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchIn}&page=1&include_adult=false`)
                .then((resp) => {
                    resp.data.results.length === 0 ? setArrayEmpty(true)
                        : setArrayEmpty(false)
                    setSearchMovies(resp.data.results)

                })
                .catch((error) => {
                    console.log('axios error')
                    console.log(error)
                })
        } else {
            navigate('/')
        }


    }, [searchIn])



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
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log('Array empty')
            }
        })
    }


    console.log('view search')
    console.log(arrayEmpty)
    console.log(searchMovies)
    return (
        <div className='search-data'>
            <div className="search-posters">
                {
                    arrayEmpty === false ?
                        searchMovies.map((obj,index) =>
                            <div className='content-box'  key={index}>
                                <div className='small-add-icon'
                                    onClick={() => {
                                        dispatch(addToList({ obj }))
                                    }} >
                                    <AiOutlinePlus />
                                </div>
                                <img onClick={() => handleMovie(obj.id)} className="samllPoster" src={`${imageUrl + obj.poster_path}`} />
                                <p className='small-poster-text'>{obj.overview}</p>
                            </div>
                        )
                        :
                        <div className='notfound'>
                            <h3>not found...!</h3>
                        </div>
                }
            </div>
            <div>
                {urlId && <YouTube opts={opts} videoId={urlId.key} />}
            </div>
        </div>
    )
}

export default ViewSearch