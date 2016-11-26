'use strict';
/*
	Component Header tab
*/

//  原生组件 引入
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight
} from 'react-native';


/// 资源引入
import iconHeadNav from '../res/headerNavigator.js';
import style from './headerNavigatorStyle.js';


/// 组件导入
// import Vhot from '../comic/Vhot.js';
// import Vlogin from '../comic/Vlogin.js';
// import HorNavigator from './horNavigator.js';

// 路由配置
/*const headeRoutes = [
	{name: '我是路由A', component: Vlogin },
	{name: '我是路由B', component: HorNavigator },
];*/



// headerTab  主类
export default class HeaderTab extends Component {

 	//数据初始化
 	constructor(props){
 		super( props );

 		this.state={
 			curIndex: 1
 		}
 	}


 	// 切换按钮 用于切换哈哈
 	tabQiehuan( event, index){
 		console.log( index);
 		let curRouteStack = this.navigator ? this.navigator.getCurrentRoutes() : headeRoutes;
 		this.navigator.jumpTo( curRouteStack[index]  );
 	}


 	// render header  nav button
 	renderCenter(){
 		// var len = this.state.datas.length -1 ;
 		var len = this.props.headeRoutes.length -1 ;

 		const datas = this.props.headeRoutes
 					.map((item, index)=>{
 						var itemstyle = 'title';
 						var radius = 'kong';
 						switch( index ){
 							case  0: 
 								itemstyle = 'titleL';
 								radius = 'titleleftR';
 								break;
 							case len: 
 								itemstyle = 'titleR';
 								radius ='titlerightR';
 								break;
 						}
 						// console.log( itemstyle );
 						// console.log(  style[itemstyle] );
 						return (
 							<TouchableHighlight
 								style={ style[radius] }
 								onPress={ (event) => this.tabQiehuan(event, index) }
 								key={index}
 								>
	 							<View  key={index} style={ [style[radius] ,style[itemstyle], this.state.curIndex == index ? style.titlecur : {} ]} >
	 								<Text  style={ this.state.curIndex == index ? style.titletextcur : style.titletext  }>{item.title}</Text>
	 							</View>
 							</TouchableHighlight>
 						)
 					});
 		return datas;
 	}

 	/// render 路由场景  这个歌可以用  啊哈哈
 	renderScene( route, navigator ){

 		return (
 			<route.component navigator={navigator} icnavigator={ this.props.icnavigator } route={route} />
 		)
 	}

 	//// 切换效果配置方法
 	configureScene(  route, routeStack  ){
 		return Navigator.SceneConfigs.HorizontalSwipeJump;
 	}

 	//// render main headernav
	render(){
		return (
			<View style={style.main }>
				<View style={ style.headbox }>
					<View style={style.left} >
						<Text> /-/-/ </Text>
					</View>
					<View style={style.center} >
						{ this.renderCenter() }
					</View>
					<View style={style.right} >
						<TouchableHighlight>
							<Image style={ style.searchimg } source={iconHeadNav.ic_works_nav_search_normal} />
						</TouchableHighlight>
					</View>
				</View>
				
				<Navigator 
					style={{flex: 1 }}
					initialRoute={ this.props.headeRoutes[ this.state.curIndex ] }
					initialRouteStack={ this.props.headeRoutes }
			        renderScene={ this.renderScene.bind(this) }
			        configureScene = { (route, routeStack) => this.configureScene( route, routeStack ) }
			        ref={(navigator) => {this.navigator = navigator }}
			        onWillFocus = { (nextRoute) => {
			        	let curRouteStack = this.navigator ? this.navigator.getCurrentRoutes() : this.props.headeRoutes;

			        	var nextIndex = curRouteStack.indexOf( nextRoute );
			        	// console.log( nextIndex );

			        	if(  nextIndex >=0 && nextIndex != this.state.curIndex ){
			        		this.setState( {
			        			curIndex: nextIndex
			        		});
			        	}

			        }}
				/>

			</View>
		);
	}
}


