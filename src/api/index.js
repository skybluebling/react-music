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

const music = axios.create({
  baseURL: `${config.musicUrl}`
});

export function top250(playload) {
	if (!playload.count) {
		playload.count = 10
	}
	return instance.get(`/v2/movie/top250?start=${playload.start}&count=${playload.count}`)
}

export function getMusic(playload) {
	return music.get(`/api/playlist/detail?id=${playload.id}`)
}