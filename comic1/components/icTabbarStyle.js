'use strict';

import React from 'react-native';
let { StyleSheet } = React;



let color = {
	basc: '#fa98af',
	hui1: '#333',
}

//// icTabbarStyle.js
export default StyleSheet.create({


	tabBarShow:{
		height: 44
	},
	tabBarHide:{
		height: 0
	},
	navigator:{
		flex: 1,
	},

	tabbar:{
		height: 44,
		flexDirection: 'row',
		borderTopWidth: 1,
		borderColor: '#ccc',
		backgroundColor: '#fff'
	},

	tabbarItembox:{
		 height: 44,
		 flex: 1,
	},
	tabbarItem:{
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabbarImg:{
		height: 26,
		width: 26,
	},
	tabbarText:{
		fontSize: 12,
		color: color.hui1,
	},
	tabbarTextCur:{
		fontSize: 12,
		color: color.basc,
	}


});