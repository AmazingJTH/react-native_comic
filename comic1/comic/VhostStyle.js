'use strict';
import React from 'react-native';
let {
	StyleSheet
} = React;

export default StyleSheet.create({
	Vcommunity: {
		flex: 1,
		backgroundColor: '#fff',
	},
	Vtop: {
		height: 70,
		alignItems: 'center',
		marginTop: 6,
		borderBottomWidth: 1,
		borderColor: '#CFCFCF',
	},
	Vmiddle: {
		flex: 1,
	},
	Vbottom: {
		height: 52,
		borderTopWidth: 1,
		borderColor: '#CFCFCF',
	},
	Vheader: {
		width: 140,
		height: 32,
		flexDirection: 'row',
	},
	Vfocus: {
		width: 70,
		height: 32,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#FFBA15',
		borderTopLeftRadius: 25,
		borderBottomLeftRadius: 25,
	},
	Vsquare: {
		width: 70,
		height: 32,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#FFBA15',
		borderTopRightRadius: 25,
		borderBottomRightRadius: 25,
	},
	VactivedText: {
		color: '#FFFEFD',
	},
	VactivedBg: {
		backgroundColor: '#FFBA15',
	},
	Vsearch: {
		marginLeft: 120,
		width: 40,
		height: 40,
		tintColor: '#FFBA15',
	},
	VtopTitle: {
		marginTop: 10,
		flexDirection: 'row',
	},
	Vhot: {
		marginRight: 100,
		paddingBottom: 8,
		paddingLeft: 18,
		paddingRight: 18,
	},
	Vnew: {
		marginLeft: 100,
		paddingBottom: 2,
		paddingLeft: 18,
		paddingRight: 18,
	},
	VtopTitleActive: {
		color: '#FFBA15',
		borderBottomWidth: 1,
		borderColor: '#FFBA15',
		zIndex: 1,
	},
	VhotImage: {
		width: 40,
		height: 40,
	},
	Vloading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},


	VuserInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10,
	},
	VuserInfoL: {
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative',
	},
	VuserPhoto: {
		borderRadius: 40,
		marginLeft: 10,
		marginRight: 10,
	},

	VaddFocus: {
		height: 26,
		width: 60,
		marginRight: 10,
	},
	Vvip: {
		position: 'absolute',
		top: -38,
		left: -24,
		width: 80,
		height: 80,
	},
	Vtext: {
		marginLeft: 10,
		marginRight: 10,
	},
	Vtexts: {
		lineHeight: 26,
	},
	Vimage: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	Vimages: {
		width: 144,
		height: 144,
		marginTop: 10,
		marginLeft: 10,
	},
	Vcomments: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
	},
	VcommentsR: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 20,
	},
	V1px: {
		height: 0.5,
		overflow: 'hidden',
		flex: 1,
		backgroundColor: '#DFDFDF',
		marginTop: 10,
		marginBottom: 10,
	},
	VloginContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})