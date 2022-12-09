import React, { useEffect, useState } from 'react'
import './MyCollection.css'

import YouTube from 'react-youtube'
import { API_KEY, imageUrl } from '../../constants/constant'
import axios from '../../axios'

import { CiSquareRemove } from 'react-icons/ci'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'

import { useSelector, useDispatch } from 'react-redux'
import { removeFromList } from '../../feature/collection/collectionSlice'
import { useNavigate } from 'react-router-dom'


function MyCollection() {


    // collection fetched all other contents need to be edited 
    const { movieCollection, isEmpty } = useSelector((state) => {
        // console.log('my collections')
        // console.log(state.collection)
        return state.collection
    })
    const [mylist, setMylist] = useState([])
    const [urlId, setUrlId] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        setMylist(movieCollection)


    }, [movieCollection])


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
                console.log(urlId)
            } else {
                console.log('Array empty')
            }
        })
    }


    return (

        <div className='collection-data'>
            <h2 id="watchlist-title">My watchlist</h2>
            <div className="posters">

                {isEmpty === false ?
                    mylist.map((obj, index) =>
                        <div className='watchlist-box' key={index}>
                            <div className='small-add-icon'
                                onClick={() => {
                                    console.log(obj)
                                    dispatch(removeFromList({ obj }))
                                }}>
                                <CiSquareRemove />
                            </div>
                            <img onClick={() => handleMovie(obj.id)} className="samllPoster" src={`${imageUrl + obj.poster_path}`} alt="" />
                            <p className='small-poster-text'>{obj.overview}</p>
                        </div>
                    )
                    :
                    <div class='wathclist-empty'>
                        <AiOutlineAppstoreAdd id="empty-icon"
                            onClick={() => {
                                navigate('/')
                                setTimeout(() => {
                                    const el = document.getElementById("Trending")
                                    if (el) {
                                        el.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 1);
                            }} />
                        <h3>watchlist is empty</h3>
                    </div>



                }
            </div>
            <div>
                {urlId && <YouTube opts={opts} videoId={urlId.key} />}
            </div>
        </div>
    )
}

export default MyCollection