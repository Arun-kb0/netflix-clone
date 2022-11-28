import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './feature/store/cartSlice'
import collectionReducer from './feature/collection/collectionSlice'

export const store = configureStore({
    reducer:{
        movies: movieReducer,
        collection:collectionReducer,
    }

})