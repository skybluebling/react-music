/*
* @Author: Administrator
* @Date:   2017-08-05 20:55:34
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-07 21:30:45
*/

import axios from 'axios'
import config from '../config'

const instance = axios.create({
  baseURL: `${config.baseUrl}`
});

export function top250(playload) {
	let start = JSON.stringify(playload)
	return instance.get(`/v2/movie/top250?start=${start}`)
}