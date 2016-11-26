'use strict';
/*
	Component hor tab
*/

//  原生组件 引入
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ListView,
  ScrollView,  
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';


/// 资源引入
// import iconHeadNav from '../res/headerNavigator.js';
import style from './horNavigatorStyle.js';
// import icons from '../res/horNavigator.js';


/// 组件导入


/// listB
// class ListTow extends Component{
// 	render (){
// 		return (
// 			<View>
// 				<Text>  我是路由B </Text>
// 			</View>
// 		)
// 	}
// }




// horNavigator  主类
export default class HorNavigator extends Component {

 	//////  数据初始化 
 	/// 从这里开始
 	constructor(props){
 		super( props );

 		/// horRoutes 是传进来的 数据
 		this.state={
 			curIndex: 0
 		}
 	}



 	/// render 路由场景  
 	renderScene( route, navigator ){
 		return (
 			<route.component  ref={route.id} navigator={navigator}  icnavigator={ this.props.icnavigator }  route={route} />
 		)
 	}



 	/// 切换效果配置方法
 	configureScene(  route, routeStack  ){

 		if(  this.props.reverse ){
 			return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
 		}
 		return Navigator.SceneConfigs.HorizontalSwipeJump;
 	}




 	// 切换按钮 用于切换哈哈
 	tabQiehuan( event, index){
 		console.log( index );
 		let curRouteStack = this.horNavigator ? this.horNavigator.getCurrentRoutes() : headeRoutes;
 		this.horNavigator.jumpTo( curRouteStack[index]  );
 	}



 	/// nav render list
 	/// 这个方法么 最好是传进来的，对就是这样哈
 	/// 传进来使用的使用有个问题， this是？   style是？   
 	renderNavView(){

 		let navView = this.props.horRoutes.map( (item, index) => {
 			return (
 				<TouchableHighlight
 					style={ style.navtouch }
 					onPress={ (event) => this.tabQiehuan(event, index) }
 					key={index}
 				>
	 				<View  style={ this.state.curIndex == index ? style.navitemcur : style.navitem } key={index}>
	 					<Text style={ this.state.curIndex == index ? style.navtextcur : style.navtext }>{ item.title }</Text>
	 				</View>
 				</TouchableHighlight>
 			)
 		});

 		/// 返回数据
 		return navView;

 	}



 	//// render main headernav
 	//// 然后就是这里
 	//// 先来一个 scrollView组件  然后是一个 list组件  对就是这样
	render(){

		const NavView = this.renderNavView();
		// console.log( NavView );

		return (
			<View style={style.main }>
				<View style={  style.scrollbox }>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
						<View style={this.props.reverse ? style.rowreverse :  style.row  }>
							{ NavView }
						</View>
					</ScrollView>
				</View>
				<View  style={ style.listbox} >

					<Navigator 
						style={{flex: 1  }}
						initialRoute={ this.props.horRoutes[ this.state.curIndex ] }
						initialRouteStack={ this.props.horRoutes }
				        renderScene={ this.renderScene.bind(this) }
				        configureScene = { (route, routeStack) => this.configureScene( route, routeStack ) }
				        ref={(navigator) => {this.horNavigator = navigator }}
				        onWillFocus = { (nextRoute) => {

				        	/// 获取到 routes 列表
				        	let curRouteStack = this.horNavigator ? this.horNavigator.getCurrentRoutes() : this.props.horRoutes;
				        	/// 查找到先一个需显示场景的编号
				        	var nextIndex = curRouteStack.indexOf( nextRoute );
				        	
				        	/// 纯在这个路由 并且不是当前路由才替换
				        	if(  nextIndex >=0 && nextIndex != this.state.curIndex ){


				        		/// 这里想做的就是 初始化数据啦 通过 tabbar切换来实现
				        		// console.log( nextRoute );
				        		// // console.log( curRouteStack[nextIndex] );
				        		// // console.log( this );
				        		// console.log( this.horNavigator );
				        		let nextlist = this.horNavigator.refs[ nextRoute.id ];
				        		if( nextlist.state.xuyaoloading == false ){
				        			nextlist.state.xuyaoloading = true;
				        			nextlist.fetchData();
				        		}

				        		this.setState( {
				        			curIndex: nextIndex
				        		});
				        	}

				        }}
					/>
				</View>
			</View>

		);
	}
}

