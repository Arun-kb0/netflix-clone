import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    movieCollection: [],
    title: null,
    isEmpty: true

}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addToList: (state, { payload }) => {

            console.log(payload.obj)
            state.isEmpty = false
            
            //mutating array
            let collectionTmp = state.movieCollection
            state.movieCollection = collectionTmp.concat(payload.obj)

            const newCol  = state.movieCollection.map((obj)=> [obj.id,obj])
            const newMap = new Map(newCol)
            const iter = newMap.values()
            state.movieCollection = [...iter]


            console.log('state.movieCollection')
            console.log(state.movieCollection)
        },


        removeFromList: (state, { payload }) => {

            state.movieCollection = state.movieCollection.filter((movie) => {
                console.log("movie id " + movie.id)
                return movie.id !== payload.obj.id
            })

            if (state.movieCollection.length < 1) state.isEmpty = true
            console.log(state.movieCollection)

        },

    }
})


export const { addToList, removeFromList } = collectionSlice.actions
export default collectionSlice.reducer

