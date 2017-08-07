import React, { Component } from 'react'
import Nav from './Nav'
import {connect} from 'react-redux'
import './style/movie.css'
import {getTopMovie} from '../action/movieAction.js'
import {withRouter} from 'react-router-dom'

class Movie extends Component {
	state = {
		busy: false
	}
	getTop250 = () => {
		this.props.dispatch(getTopMovie())
	}
	scroll = (e) => {
		let innerHeight = window.innerHeight - document.querySelector(".movie").offsetHeight - document.querySelector('.nav').offsetHeight;
		let ulHeight = document.querySelector(".navBar").offsetHeight;
		console.log(e.target.scrollTop)
		if (e.target.scrollTop - ulHeight >= innerHeight ) {
			this.loadMore();
		}
	}
	loadMore = () => {
		if (this.state.busy) {
			return
		}
		let start = this.props.movie.length
		console.log(start)
		this.props.dispatch(getTopMovie({"start": start, "count": 10}))
	}
	componentDidMount () {
		this.loadMore();
	}
	render() {
		const {movie} = this.props;
		console.log(this.props)
		return (
			<div className="movie">
				<h2 className="title">movie</h2>
				<div className="movieCenter" onScroll={this.scroll}>
					<ul className="navBar">
						<li onClick={this.getTop250}>TOP250</li>
						<li>正在热映</li>
						<li>即将上映</li>
					</ul>
					<div className="movieContent">
						<ul>
							{
								movie.map((item, index) => {
									return (
										<li key={item.id}>
											<img src={item.images.large} alt="" />
											<div>
												<span>{item.title}</span>
												<p><span>{item.genres}</span><span>({item.year})</span><span>(平均{item.rating.average}分)</span></p>
											</div>
											<i></i>
										</li>
									)
								})
							}
						</ul>
					</div>
					<Nav /> 
				</div>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		...state.top250
	}
}
export default withRouter(connect(mapStateToProps)(Movie))