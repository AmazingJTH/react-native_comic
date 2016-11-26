'use strict';
/*
	remne.js
	热门  的 内容
	这样的 haunted是不是就少些文字内容来哦   对  少些了哦
*/

import React, { Component } from 'react';
import {
  View
} from 'react-native';

// 自定义组件导入
// import Header from '../components/Header.js';
// import RemenList from './remenlist.js';
import RemenList from './remenlist.js';


////  horTab 导入
import HorTab from '../components/horNavigator.js';


// 整个热门  Component  这个组件也很重要  但是呢  这里有些简单哈  应为逻辑不在这里哈
// d但是有个 文件阐述过程
export default class Found extends Component {
	render(){

		var curDate = new Date();
		var todayTime = (new Date( curDate.getFullYear(),curDate.getMonth(), curDate.getDate()  )).getTime()/1000 - 172800;
		var day = curDate.getDay();




		var arr =  ['周日','周一','周二','周三','周四','周五','周六'];

		var horRoutes = [
			{title: '今天', id: 'listtoyday', page: 0, component: RemenList, url: 'http://api.kkmh.com/v1/daily/comic_lists/0?since=0', xuyaoloading: true},
			{title: '昨天', id: 'listyestorday', page: 0, component: RemenList, url: 'http://api.kkmh.com/v1/daily/comic_lists/1?since=0', xuyaoloading: false}
		];



		for(var i = day + 5; i > day ; i-- ){						

			horRoutes.push({
				title:  arr[ i%7 ] ,
				id: 'list'+i, 
				page: 0,
				component: RemenList,
				url: `http://api.kkmh.com/v1/daily/comic_lists/${todayTime}?since=0`,
				xuyaoloading: false
			});

			todayTime = todayTime - 86400;

		}

		return(
			<View style={{ flex: 1 }} >
				<HorTab 
					horRoutes = { horRoutes }
					reverse = { true }
					icnavigator={ this.props.icnavigator } 
				/>
			</View>
		)
	}
}


