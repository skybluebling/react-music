import React, {Component} from 'react';
import {connect} from 'react-redux'
import './style/music.css'
import Nav from './Nav'
import {formatTime} from '../util'

class MusicList extends Component {

	render() {
		console.log(this.props)
		let {musicList} = this.props
		return (
			<div className="musicList">
				<h2>music</h2>
				<ul>
					{
						musicList.map((item, index) => {
							return (
								<li key={item.id}>
									<img src={item.album.picUrl} alt=''/>
									<p>{item.name}/{formatTime(item.duration)}</p>
								</li>
							)
						})
					}
				</ul>
				<Nav backgroundColor={"#009688"}/>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		...state.music
	}
}
export default connect(mapStateToProps)(MusicList)