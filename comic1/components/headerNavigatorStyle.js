'use strict';

import React from 'react-native';
let { StyleSheet } = React;


let color = {
	basc: '#fa98af',
	hui1: '#333',
}

//// icTabbarStyle.js
export default StyleSheet.create({
	kong:{},
	main: {
		flex: 1,

	},
	headbox:{
		height: 44,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eee',
	},
	left:{
		width: 50,
		justifyContent:'center',
		alignItems: 'center',
	},
	center:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleleftR:{
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
	},
	titlerightR:{
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
	},
	title:{
		height: 30,
		paddingLeft: 12,
		paddingRight: 12,
		backgroundColor: '#fff',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#fdba15',
	},
	titleL:{
		height: 30,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: '#fff',
		justifyContent: 'center',
		borderColor: '#fdba15',
		borderWidth: 1,

	},
	titleR:{
		height: 30,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: '#fff',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#fdba15',
	},
	titlecur: {
		backgroundColor: '#fdba15',
	},
	titletext: {
		color: '#fdba15'
	},
	titletextcur:{
		color: '#fff'
	},

	searchimg:{
		height: 20,
		width: 20,
	},
	right:{
		width: 50,
		justifyContent:'center',
		alignItems: 'center',
	}


});
