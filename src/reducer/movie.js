/*
* @Author: Administrator
* @Date:   2017-08-05 21:02:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-06 18:56:10
*/
import {GET_TOP} from '../constant'
let initialMovie = {
	movie: [],
	currentMovie: []
}

export function top250(state = initialMovie, action) {
	switch(action.type) {
		case GET_TOP:
		let movieList = state.movie.splice(0)
			if (movieList.length) {
				[].push.apply(movieList, action.data)
			} else {
				movieList = action.data
			}
			console.log(action)
			return Object.assign({}, state, {
				movie: movieList,
				currentMovie: action.data
			})
		default: return state
	}
}