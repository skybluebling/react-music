/*
* @Author: Administrator
* @Date:   2017-08-05 22:23:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-07 22:07:03
*/
import {GET_TOP} from '../constant'
import {top250} from '../api'


export function getTopMovie(playload) {
	console.log(playload)
	return async function (dispatch) {
		var data = await top250(playload).then(resp => resp.data.subjects)
		dispatch(getTop(data))
	}
}

export function getTop(data) {
	return {
		type: GET_TOP,
		data
	}
}