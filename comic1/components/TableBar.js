'use strict';
import React ,{ Component } from 'react';
import { 
	Text, 
	Navigator, 
	View,
	Image,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import icons from '../Assets/Icons.js';

//Component
import MyComponent from '../comic/my.js';
import RemenComponent from '../comic/remen.js';


// TableBar Class
export default class TableBar extends Component {

	// 构造函数  初始化 tabIndex
	constructor( props ){
		super( props );
		this.state = {
			tabIndex: 0,
			isHome: true
		}
		this.that = this;
	}

	// render 场景 route 当前路由， navigator 就是页面中的navigator组件
	renderScene(route, navigator){
		// console.log( this );
		return(
			<route.component navigator={navigator} route={route} />
		)
	}

	////  config
	configureScene(route, routeStack) {
	    if (route.type == 'webview') {
			return Navigator.SceneConfigs.PushFromRight;
	    }
		return Navigator.SceneConfigs.HorizontalSwipeJump;
	}

	//// 这道理什么情况呀  这里好像并没有问题
	render (){

		const routes = [
			{name: 'routerAAA', component: RemenComponent },
			{name: 'routerBBB', component: ListTow },
			{name: 'routerCCC', component: ListC },
			{name: 'routerDDD', component: MyComponent }
		];
		
		const tabBars = [
			{ title: '漫画', imageUri: icons.home_normal , imageUriCur: icons.home_pressed },
			{ title: '发现', imageUri: icons.discover_normal, imageUriCur: icons.discover_pressed},
			{ title: 'V社区', imageUri: icons.feed_normal, imageUriCur: icons.feed_pressed },
			{ title: '我的', imageUri: icons.me_normal, imageUriCur:  icons.me_pressed}
		];

		let tabBarList = tabBars.map((item, index) => {
			return (
				<View style={ style.tabBaritemBox } key={index}>
					<TouchableHighlight
						underlayColor='#faa'
						onPress={ ( navigator ) => {
							// let next =  this.navigator.getCurrentRoutes();
							// this.navigator.jumpTo( next[index]); 
							this.navigator.replace( routes[index]  );
							this.state.tabIndex = index;
						}}
						key={index}
					>
						<View style={style.tabBarItem} >
							<Image source={  index == this.state.tabIndex ?  item.imageUriCur : item.imageUri } style={style.tabBarImage } />
							<Text style={ index == this.state.tabIndex ?  style.tabBarTextCur : style.tabBarText }> {item.title} </Text>
						</View>
					</TouchableHighlight>
				</View>
			)
		});

		//// fle

		//// 返回结果
		return (
			<View style={{flex: 1 }}>
				<Navigator 
					initialRoute={ routes[0] }
					initialRouteStack={ routes }
			        renderScene={ this.renderScene }
			        
					ref={(navigator) => {
			            this.navigator = navigator;
			        }}
					onWillFocus = { (nextRoute) => {
						var Routes = null;
						var tabIndex = this.state.tabIndex;
						var isHome = this.state.isHome;


						// if( this.navigator ){
						// 	Routes =  this.navigator.getCurrentRoutes();
						// } else{
							Routes = routes;
						// }

						if( nextRoute != Routes[this.state.tabIndex]){
							var nextIndex = Routes.indexOf( nextRoute );
							tabIndex = nextIndex >= 0 ? nextIndex :  tabIndex;
						}

						if( nextRoute.name === "webview" ){
							isHome = false;

						} else{
							isHome = true;
						}
						
						this.setState({
							tabIndex,
							isHome
						})


					}}
					navigationBar= {
						<View style={ this.state.isHome ? style.tabBarShow : style.tabBarHide } >
							<View style={  style.tabBarBox }>
								{tabBarList}
							</View>
						</View>
					}
				/>
			</View>
	    );
	}
}



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


// 到底什么情况哦  烦死了
//  listAa
class ListOne extends Component{
	render (){
		return (
			<View>
				<Text>  列表AAA  </Text>
			</View>
		)
	}
}

// listB
class ListTow extends Component{
	render (){
		return (
			<View>
				<Text>  列表BBB </Text>
			</View>
		)
	}
}

// listB
class ListC extends Component{
	render (){
		return (
			<View>
				<Text>  列表CCC </Text>
			</View>
		)
	}
}


/*++/++*/
// 样式表
const style = StyleSheet.create({

	tabBarShow:{
		height: 44
	},
	tabBarHide:{
		height: 0
	},

	// navigator
	navBox: {
		flex: 1,

		backgroundColor: '#fafafa',
	},


	// Header
	headBox: {
		height: 44,  
		backgroundColor: '#faa', 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
	headTitle: { 
		fontSize: 18,
		textAlign: 'center' 
	},


// tabBar  style
	// 最大那个bar盒子
	tabBarBox:{
		height: 44,
		backgroundColor: '#fff',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	},
	// item 最大的盒子
	tabBaritemBox:{
		flex: 1,
		justifyContent: 'center',
	},
	// 那个item盒子
	tabBarItem:{
		// flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	// 图片
	tabBarImage:{
		width: 24,
	    height: 24,
	    // tintColor: '#888',
	},
	tabBarImageCur:{
		width: 24,
	    height: 24,
	    // tintColor: '#fdba15',
	},
	// 文字颜色
	tabBarText:{
		color: '#888',
	},
	tabBarTextCur:{
		color: '#fdba15',
	},

});

/*
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


// 到底什么情况哦  烦死了
//  listAa
class ListOne extends Component{
	render (){
		return (
			<View>
				<Text>  列表AAA  </Text>
			</View>
		)
	}
}

// listB
class ListTow extends Component{
	render (){
		return (
			<View>
				<Text>  列表BBB </Text>
			</View>
		)
	}
}

// listB
class ListC extends Component{
	render (){
		return (
			<View>
				<Text>  列表CCC </Text>
			</View>
		)
	}
}

// listD
class ListD extends Component{
	render (){
		return (
			<View>
				<Text>  列表DDD</Text>
			</View>
		)
	}
}*/