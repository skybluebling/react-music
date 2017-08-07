/*
* @Author: Administrator
* @Date:   2017-08-05 21:01:51
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-05 21:30:13
*/
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './index';

let middleWares = [thunk];

middleWares.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middleWares))

export default store;