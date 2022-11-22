import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {baseUrl} from '../../constants/constant'
import { API_KEY } from '../../constants/constant'
import axios from '../../axios'
import {originals, action, horror, trending, romance, searchUrl} from '../../urls'

const initialState={
    allMovies:[],
    isLoading:true,
    searchData:[],
    searchStatus:false,
    searchIn:'',
    
}

export const getMovies = createAsyncThunk('movies/getMovies',
    async (name,thunkAPI)=>{
        try{
            const resp1 = await axios.get(trending)
            const resp2 = await axios.get(originals)
            const resp3 = await axios.get(action)
            const resp4 = await axios.get(horror)
            const resp5 = await axios.get(romance)
            const resp =[
                resp1.data.results,
                resp2.data.results,
                resp3.data.results,
                resp4.data.results,
                resp5.data.results,
            ]
            return resp
        }catch(error){
            console.log(error)
        }
    }
)
//console.log(getMovies)





const cartSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        filter:(state,{payload})=>{
            
            console.log('filter name')
            console.log(payload.value)
            const tmp = payload.value
            // if(payload.value !=""){
            if(payload.value == tmp){
                //const filterdMovies = await axios.get(baseUrl+`/search/movie?api_key=${API_KEY}&language=en-US&query=${payload.value}of&page=1&include_adult=false`)
               // const filterdMovies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${payload.value}&page=1&include_adult=false`)
                state.searchData=[]
                state.searchIn = payload.value
                payload.value ?  state.searchStatus= true : state.searchStatus=false
                //console.log(payload.value)
                //console.log(filterdMovies.data.results)

            // }else{
            }else if(payload.value == ""){
            
                state.searchStatus = false
                console.log('payload in empty')
                
            }


           //console.log(state.search)
            //console.log(state.searchData)
             
        }
    },
    extraReducers:{
        [getMovies.pending]:(state)=>{
            state.isLoading=true
        },
        [getMovies.fulfilled]:(state,action)=>{
            
            state.isLoading=false
            state.allMovies = action.payload 
            //console.log(state.allMovies)
        },
        [getMovies.rejected]:(state,action)=>{
            console.log(action)
            state.isLoading=false
        }
    }
}) 

export const {filter} = cartSlice.actions
export default cartSlice.reducer
