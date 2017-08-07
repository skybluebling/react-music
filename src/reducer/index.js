/*
* @Author: Administrator
* @Date:   2017-08-05 21:01:57
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-05 21:30:19
*/

import {combineReducers} from 'redux';
import {top250} from './movie'

const rootReducer = combineReducers({
	top250
});

export default rootReducer