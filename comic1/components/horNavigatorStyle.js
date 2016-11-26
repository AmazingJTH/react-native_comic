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
	rowreverse:{
		flexDirection: 'row-reverse',
	},
	row:{
		flexDirection: 'row',
	},
	main: {
		flex: 1,
	},
	scrollbox:{
		height: 44, 
		backgroundColor: '#fff'
	},
	listbox:{
		flex: 1,
	},
	scroll:{
		height: 44,
		backgroundColor: '#FFF',
	},

	/// item

	navtouch:{
		height: 44,
	},
	navitem:{
		paddingLeft: 15,
		paddingRight: 15,
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
	},
	navitemcur:{
		paddingLeft: 5,
		paddingRight: 5,
		marginLeft: 5,
		marginRight: 5,
		borderBottomWidth: 3,
		height: 44,
		borderColor: '#fdba15',
		justifyContent: 'center',
		alignItems: 'center',
	},
	navtext:{
		fontSize: 14,
	},
	navtextcur:{
		fontSize: 14,
		color: '#fdba15',
	},



	/// loading
	Vmiddle:{
		flex: 1,
	},
	Vloading:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
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
