import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style/music.css'
import Nav from './Nav'
import {getMusic} from '../api'
import {getMusicList} from '../action/musicAction'
import {withRouter} from 'react-router-dom'

let albums = [
				{
					name: "飙升榜",
					id:19723756,
					bg: require("../style/images/soar_music.jpg")
				},
				{
					name: "新歌榜",
					id:3779629,
					bg:require("../style/images/new_music.jpg")
				},
				{
					name: "原创榜",
					id:2884035,
					bg:require("../style/images/original_music.jpg")
				},
				{
					name: "KTV麦榜",
					id:21845217,
					bg:require("../style/images/ktv_music.jpg")
				},
				{
					name: "华语金曲榜",
					id:4395559,
					bg:require("../style/images/chinese_music.jpg")
				},
				{
					name: "我的专辑",
					id:98833242,
					bg:require("../style/images/my_music.jpg")
				},
			];

class Music extends Component {
	jumpToMusic = async (id) => {
		this.props.history.push('/musiclist')
		let data = await getMusic({id: id}).then((resp) => {
			if (resp.data.code === 200) {
				return resp.data.result.tracks
			}
		})
		this.props.dispatch(getMusicList(data))
	}	
	render() {
		return (
			<div className="music">
				<h2 className="title">music</h2>
				<ul className="musicLists clearFix">
					{
						albums.map((item, index) => {
							return (
								<div key={item.id} className="list" onClick={ () => {
									this.jumpToMusic(item.id)
								}}><img src={item.bg} alt=""/></div>
							)
						})
					}
				</ul>
				<Nav backgroundColor={"#009688"}/>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		...state.music
	}
}
export default withRouter(connect(mapStateToProps)(Music))