'use strict';

import React from 'react';
import {
	Text,
	View,
	Image,
	ListView,
	TouchableHighlight,
	ActivityIndicator,
} from 'react-native';


//// 组件导入
import Vhot from './Vhot.js';
import Vlogin from './Vlogin.js';

/// header tab切换 导入
import HeaderTab from '../components/headerNavigator.js';



export default React.createClass({

	getInitialState() {
		return {}
	},


	//// 
	render() {

		/// header 路由配置
		const headeRoutes = [
			{title: '关注', name: 'vA', component: Vlogin },
			{title: '广场', name: 'vB', component: Vhot },
		];

		return (
			<View style={{ flex: 1 }}>
				<HeaderTab 
					headeRoutes = { headeRoutes }
				/>
			</View>
		)
	}
})