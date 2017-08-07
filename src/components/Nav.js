import React, {Component} from 'react';
import './style/nav.css';
import {Link} from 'react-router-dom'

class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<Link to="/movie"><i></i><span>电影</span></Link>
				<Link to="/music"><i></i><span>音乐</span></Link>
				<Link to="book"><i></i><span>书籍</span></Link>
				<Link to="photo"><i></i><span>图片</span></Link>
			</div>
		)
	}
}
export default Nav