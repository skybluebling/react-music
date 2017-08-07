/*
* @Author: Administrator
* @Date:   2017-08-05 20:53:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-06 14:55:21
*/
import {API_PROXY} from '../constant'
const config = {
	development: {
		baseUrl: API_PROXY+'https://api.douban.com'
	}
}

export default config[process.env.NODE_ENV]