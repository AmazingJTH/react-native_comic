'use strict';
import React from 'react-native';
let {
	StyleSheet
} = React;

export default StyleSheet.create({
	itemBox:{
		paddingTop: 10,
		paddingBottom: 10,
		marginLeft: 10,
		borderBottomWidth: 0.8,
		borderColor: '#ccc',
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
	},
	imgbox:{
		height: 90,
		width: 124,
	},
	imgstyle:{
		height: 90,
		width: 124,
	},
	//
	itemConBox:{
		paddingLeft: 10,
		flex: 1,
		// alignItems: 'flex-start',
	},
	titleBox:{
		height: 24,
		flexDirection: 'row',
	},
	title:{
		height: 24,
		flex: 1,
		overflow: 'hidden',
	},
	titleText:{
		// fontSize: 14,
		color: '#111',
	},
	guanzhu:{
		height: 24,
		width: 60,
		backgroundColor: '#fa98ba',
		justifyContent: 'center',
		alignItems: 'center',

		borderTopLeftRadius: 12, 
		borderTopRightRadius: 12,
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,

		marginRight: 10,
		marginLeft: 5,

	},
	guanzhuText:{
		color: '#111',
		fontSize: 14
	},
	nickname:{
		marginTop: 2,
		height: 20,
	},
	nicknameText:{
		color: '#ccc',
		fontSize: 14
	},
	other:{
		marginTop: 4,
		flexDirection: 'row',
		alignItems: 'center',
		height: 24,
	},
	likes:{
		height: 24,
		flexDirection: 'row',


	},
	comments:{
		height: 24,
		flexDirection: 'row',
	},
	iconsImg:{
		height: 16,
		width: 16,
		marginLeft: 3,
		marginRight: 3,
	},
	itemText:{
		color: '#ccc',
		marginRight: 8,
	}
})