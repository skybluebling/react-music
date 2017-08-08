import {GET_MUSIC_LIST} from '../constant'

let musicInitial = {
	musicList: []
}

export function music(state = musicInitial, action) {
	switch(action.type) {
		case GET_MUSIC_LIST:
			return Object.assign({}, state, {
				musicList: action.data
			})
		default: return state
	}
}