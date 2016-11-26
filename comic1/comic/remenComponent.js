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
import Remen from './remen.js';
import Vlogin from './Vlogin.js';

/// header tab切换 导入
import HeaderTab from '../components/headerNavigator.js';



export default React.createClass({

	//// 
	render() {

		/// header 路由配置
		const headeRoutes = [
			{title: '关注', name: 'comicA', component: Vlogin },
			{title: '热门', name: 'comicB', component: Remen },
		];

		
		return (
			<View style={{ flex: 1 }}>
				<HeaderTab 
					headeRoutes = { headeRoutes }
					icnavigator = { this.props.icnavigator }
				/>
			</View>
		)
	}
})