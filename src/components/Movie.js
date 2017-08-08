import React, { Component } from 'react'
import Nav from './Nav'
import {connect} from 'react-redux'
import './style/movie.css'
import {getTop} from '../action/movieAction.js'
import {withRouter} from 'react-router-dom'
import {top250} from '../api'

class Movie extends Component {
	state = {
		busy: false,
		loading: true,
		step: 1
	}
	scroll = (e) => {
		let innerHeight = window.innerHeight - document.querySelector(".movie").offsetHeight - document.querySelector('.nav').offsetHeight;
		let ulHeight = document.querySelector(".navBar").offsetHeight;

		if (e.target.scrollTop - ulHeight >= innerHeight ) {
			this.loadMore();
		}
	}
	loadMore = async () => {
		if (this.state.busy || this.state.step !== 1) {
			return
		}
		this.setState({
			busy: true,
			loading: true
		})
		let start = this.props.movie.length
		var data = await top250({
			"start": start, "count": 10
		}).then(resp => {
			if (resp.data.total && resp.data.total > this.props.movie.length) {
				this.setState({
					busy: false,
					loading: false
				})
			}
			if(resp.data.total === this.props.movie.length) {
				this.setState({
					busy: true,
					loading: false
				})
			}
			return resp.data
		})

		this.props.dispatch(getTop(data.subjects))
	}
	getTop250 = () => {
		this.setState({
			step: 1
		})
		this.loadMore()
	}
	getInTheater = () => {
		this.setState({
			step: 2
		})
	}
	getComing = () => {
		this.setState({
			step: 3
		})
	}
	componentDidMount () {
		this.loadMore();
	}
	render() {
		const {movie} = this.props;
		return (
			<div className="movie">
				<h2 className="title">movie</h2>
				<div className="movieCenter" onScroll={this.scroll}>
					<ul className="navBar">
						<li onClick={this.getTop250} className={this.state.step === 1 ? "on" : ""}>TOP250</li>
						<li onClick={this.getInTheater} className={this.state.step === 2 ? "on" : ""}>正在热映</li>
						<li onClick={this.getComing} className={this.state.step === 3 ? "on" : ""}>即将上映</li>
					</ul>
					<div className="movieContent">
						<ul>
							{	

								movie ? movie.map((item, index) => {
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
								}) :null
							}
						</ul>
						{
							this.state.loading ? (
								<div className="loadingBox">
									<img src={require('../style/images/loading.gif')} alt=''/>
								</div>
							) : null
						}
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