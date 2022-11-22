import { API_KEY } from "./constants/constant";

export const originals=`/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action =`/discover/movie?api_key=${API_KEY}&with_genres=28`
export const horror =`/discover/movie?api_key=${API_KEY}&with_genres=27`
export const trending = `/trending/movie/week?api_key=${API_KEY}`
export const romance=`/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const searchUrl = `/search/movie?api_key=${API_KEY}&language=en-US&query=${''}of&page=1&include_adult=false`