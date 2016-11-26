'use strict';
import React ,{ Component } from 'react';
import { 
	Navigator, 
	Text, 
	View,
	Image,
	TouchableHighlight,
	StyleSheet
} from 'react-native';



// 组件  组件么 传进来来了  不需要再引用了哈
// import MyComponent from '../comic/my.js';
// import RemenComponent from '../comic/remen.js';
// import HeaderNav from './headerNavigator.js';



// 图标资源  图片 什么的
// import iconHome from '../res/iconHome.js';
import style from './icTabbarStyle.js';






// IcTabBar  最外层的tabbar
export default class IcTabBar extends Component {

	// 构造函数   类的生命周期函数
	constructor( props ){
		super( props );

		var tabIndex = this.props.defaultIndex || 0;
		this.state = {
			tabIndex: tabIndex,
			isHome: true
		}

	}



	////  自定义函数
	////   navigator  render场景的方法, 组件之间的替换，显示（ 就是这个理由吧）   route 当前路由， navigator 就是页面中的navigator组件
	renderScene(route, navigator){

		// console.log( this );  这里的
		// 这里的this  是 navigator的配置对象
		return(
			<route.component icnavigator={navigator} route={route} />
		)
	}



	////   navigator 的切换效果配置函数， 可以实现不同的场景 不同的切换效果
	configureScene(route, routeStack) {
	    if (route.type == 'webview') {
			return Navigator.SceneConfigs.PushFromRight;
	    }
		return Navigator.SceneConfigs.HorizontalSwipeJump;
	}



	//// navigator d navigationBar 也就是tabbar
	//// 将tabar 的配置数组转化为可视化的数组
	getNavigationBar(  ){

		var tabbars = this.props.configTabBars.map(( item, index) => {
			return (
				<View style={ style.tabbarItembox } key={index}>
					<TouchableHighlight	
						onPress= { (event)=>{
							// 这里怎么会是navigator对象呢 当然不对哈
							// 这里面好像不能写注释 写注释要报错  啊哈哈 管他呢
							this.navigator.replace( this.props.configTabBars[index]  );
						}}
						key={index}
						>
						<View style={ style.tabbarItem } key={index}>
							<Image style={ style.tabbarImg } source={ this.state.tabIndex === index ? item.imageUriCur : item.imageUri   }   />
							<Text style={ this.state.tabIndex === index ? style.tabbarTextCur : style.tabbarText } > { item.title } </Text>
						</View>
					</TouchableHighlight>
				</View>
			)
		});

		///// 返回整个tabbar组件
		return tabbars;
	}

	//// 这道理什么情况呀  这里好像并没有问题
	render (){

		let tabbars = this.getNavigationBar(  );

		console.log( this.state.isHome );
		//// 返回结果
		return (
			<View style={ style.navigator }>
				<Navigator 
					initialRoute={ this.props.configTabBars[ this.state.tabIndex ] }
			        renderScene={ this.renderScene }
			        ref={(navigator) => {this.navigator = navigator }}
			        onWillFocus = { (nextRoute) => {

			        	var nextIndex = this.props.configTabBars.indexOf( nextRoute);
			        	var tabIndex = this.state.tabIndex;
			        	var isHome = true;

			        	
			        	if(  nextIndex >=0 && nextIndex != this.state.tabIndex ){
			        		tabIndex = nextIndex;
			        	}

			        	// 判断是不是隐藏
		        		if( nextRoute.name === "webview" ){
							isHome = false;
						}

						console.log( isHome );
						// 哈哈
						this.setState( {
		        			tabIndex,
		        			isHome
		        		});



			        }}
					navigationBar= {
						<View style={  this.state.isHome ? style.tabbar : style.tabBarHide } >
							{ tabbars }
						</View> 
					}
				/>
			</View>
	    );
	}
}

/////
					/*  initialRouteStack={ configRoutes }*/




/// 没有问题就不要去动它呀
// header
class Header extends Component{
	render(){
		return (
			<View style={ style.headBox }>
				<Text style={ style.headTitle }>
				终于好了  </Text>
			</View>
		);
	}
}



///  下面这些都用不着了


// 到底什么情况哦  烦死了
//  listAa
// class ListOne extends Component{
// 	render (){
// 		return (
// 			<View>
// 				<Text>  列表AAA  </Text>
// 			</View>
// 		)
// 	}
// }

// // listB
// class ListTow extends Component{
// 	render (){
// 		return (
// 			<View>
// 				<Text>  列表BBB </Text>
// 			</View>
// 		)
// 	}
// }

// // listB
// class ListC extends Component{
// 	render (){
// 		return (
// 			<View>
// 				<Text>  列表CCC </Text>
// 			</View>
// 		)
// 	}
// }

// // listD
// class ListD extends Component{
// 	render (){
// 		return (
// 			<View>
// 				<Text>  列表DDD</Text>
// 			</View>
// 		)
// 	}
// }


// 我去 终于不报错了
// 这样定义数据好么  不行 我得把它放到碗外面去
// 数据定义
// 路由init场景数组
// 我能说下面的东西已经不存在了么
// const configRoutes = [
// 	{name: 'routerAAA', component: HeaderNav },
// 	{name: 'routerBBB', component: ListTow },
// 	{name: 'routerCCC', component: ListC },
// 	{name: 'routerDDD', component: ListD }
// ];
// // tabber 数据配置
// const configTabBars = [
// 	{ title: '漫画', imageUri: iconHome.ic_tabbar_home_normal,  imageUriCur: iconHome.ic_tabbar_home_pressed },
// 	{ title: '发现', imageUri: iconHome.ic_tabbar_discover_normal,  imageUriCur: iconHome.ic_tabbar_discover_pressed  },
// 	{ title: 'V社区', imageUri: iconHome.ic_tabbar_feed_normal, imageUriCur: iconHome.ic_tabbar_feed_pressed   },
// 	{ title: '我的', imageUri: iconHome.ic_tabbar_me_normal, imageUriCur: iconHome.ic_tabbar_me_pressed  }
// ];