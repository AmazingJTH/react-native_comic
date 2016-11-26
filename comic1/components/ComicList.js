/*
	Component Header
*/

import React, { Component } from 'react';
import {
  AppRegistry,  //注册app时使用
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView
} from 'react-native';



 class Header extends Component {
	render(){
		return (
			<View style={ header.box }>
				<View style={header.left} >  </View>
				<View style={header.center} >
					<View style={ header.centerL }> <Text> 关注 </Text> </View>
					<View style={ header.centerR }> <Text> 热门 </Text> </View>
				</View>
				<View style={header.right} >

				</View>
			</View>
		)
	}
}

// <Image></Imgae>

const header = StyleSheet.create({
	box:{
		height: 44,
		backgroundColor: '#f0f0f0',
		flexDirection: 'row',
		alignItems: 'center',
	},
	left:{
		width: 50,
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	centerL:{
		backgroundColor: '#fff',
	},
	centerR:{
		backgroundColor: '#5f6',
	},
	right:{
		width: 50,
		justifyContent:'center',
		alignItems: 'center',
	}

});

export { Header as default };