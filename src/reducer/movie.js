/*
* @Author: Administrator
* @Date:   2017-08-05 21:02:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-07 21:53:21
*/
import {GET_TOP} from '../constant'
let initialMovie = {
	movie: []
}

export function top250(state = initialMovie, action) {
	switch(action.type) {
		case GET_TOP:
			let movieList = state.movie.slice(0)
			if (movieList.length) {
				[].push.apply(movieList, action.data)
			} else {
				movieList = action.data
			}
			console.log(movieList)
			return Object.assign({}, state, {
				movie: movieList || []
			})
		default: return state
	}
}