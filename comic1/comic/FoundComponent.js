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
import Found from './Found.js';
import Vlogin from './discovery.js';

/// header tab切换 导入
import HeaderTab from '../components/headerNavigator.js';



export default React.createClass({

	////
	render() {

		/// header 路由配置
		const headeRoutes = [
			{title: '推荐', name: 'foundA', component: Vlogin },
			{title: '分类', name: 'foundB', component: Found },
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
