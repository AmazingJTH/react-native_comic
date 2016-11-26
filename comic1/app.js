'use strict';
/*
	快看漫画App
*/

import React, { Component } from 'react';
import {
  AppRegistry,  //注册app时使用
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView
} from 'react-native';

//  导入需要的组件  从简单的开始一步一步 的迁移打包
// import Header from './components/Header.js';
// import TableBar from './components/TableBar.js';




///   导入模块组件
import ChotComponent from './comic/remenComponent.js'; 		// 漫画热门组件
import FoundComponent from './comic/FoundComponent.js';				// 发现
import VhotComponent from './comic/VhotComponent.js';				// v社区热门
import MyComponent from './comic/my.js';		// 我的

// 框架 TableBar
import TableBar from './components/icTabbar.js';
/// 导入 TableBar需要的资源（图片）
import iconHome from './res/iconHome.js';



export default class App extends Component{

	render(){


		const configTabBars = [
			{
				title: '漫画',
				name: "routeA",
				component: ChotComponent ,
				imageUri: iconHome.ic_tabbar_home_normal ,
				imageUriCur: iconHome.ic_tabbar_home_pressed
			},
			{
				title: '发现',
				name: "routeB",
				component: FoundComponent ,
				imageUri: iconHome.ic_tabbar_discover_normal ,
				imageUriCur: iconHome.ic_tabbar_discover_pressed
			},
			{
				title: 'V社区',
				name:"routeC",
				component: VhotComponent,
				imageUri: iconHome.ic_tabbar_feed_normal,
				imageUriCur: iconHome.ic_tabbar_feed_pressed
			},
			{
				title: '我的',
				name:"routeD",
				component: MyComponent,
				imageUri: iconHome.ic_tabbar_me_normal,
				imageUriCur: iconHome.ic_tabbar_me_pressed
			}
		];

		return (
			<View style={{flex: 1 }}>
				<TableBar
					configTabBars={ configTabBars }
					defaultIndex= { 1 }
				 />
			</View>
		)
	}
}






////  test 测试使用
class  A extends Component{
	render(){
		return(
			<View>
				<Text> hello w  我啥都没有做呀 怎么就报错了呢真是的  好烦   这下不会报错了吧</Text>
			</View>
		)
	}
}

class  B extends Component{
	render(){
		return(
			<View>
				<Text> 这是真的么</Text>
			</View>
		)
	}
}
