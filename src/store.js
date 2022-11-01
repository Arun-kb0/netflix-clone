import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './feature/store/cartSlice'

export const store = configureStore({
    reducer:{
        movies: movieReducer,
    }

})