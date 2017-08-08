import {GET_MUSIC_LIST} from '../constant';

export function getMusicList(data) {
	return {
		type: GET_MUSIC_LIST,
		data
	}
}