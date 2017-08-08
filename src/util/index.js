/*
* @Author: Administrator
* @Date:   2017-08-05 22:28:19
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-05 22:28:30
*/
export function formatTime(val){
  	if(typeof val === 'undefined'){
  		return '未知长度';
  	}
  	var m = Math.floor(val/1000/60).toString();
  	var s = Math.round(val/1000%60).toString();
  	m = (m.length === 1) ? 0+m : m;
  	s = (s.length === 1) ? 0+s : s;
  	return m+":"+s;
}