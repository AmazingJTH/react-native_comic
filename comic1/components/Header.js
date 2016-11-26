'use strict';
/*
	Component Header
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import icons from '../Assets/Icons.js';

 export default class Header extends Component {

 	//数据初始化
 	constructor(props){
 		super( props );
 		this.state={
 			curIndex: 1,
 		}
 	}

 	// renderBytton
 	renderCenter(){
 		const datas = [{ title: '关注', viewStyle: header.centerL},
 					 { title: '热门', viewStyle: header.centerR}]
 					.map((item, index)=>{
 						return (
 							<View  key={index} style={ [item.viewStyle, index == this.state.curIndex ? header.centerCur : header.centerItem ] } >
 								<Text style={ index == this.state.curIndex ? header.centerCurText : header.centerItemText } >{item.title}</Text>
 							</View>
 						)
 					});
 		return datas;
 	}

	render(){
		return (
			<View style={ header.box }>
				<View style={header.left} >
					<Text> </Text>
				</View>
				<View style={header.center} >
					{ this.renderCenter() }
				</View>

				<View style={header.right} >
					<TouchableHighlight>
						<Image style={ {height: 24, width: 24 } } source={icons.search_normal} />
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

/////
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
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	centerCurText:{
		textAlign: 'center',
		color: '#fafafa',
	},
	centerCur:{
		width: 70,
		height: 30,
		justifyContent: 'center',
		backgroundColor: '#fdba15',
		borderWidth: 1,
		borderColor: '#fdba15',
		borderStyle: 'solid',
	},
	centerItem:{
		width: 70,
		height: 30,
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#fdba15',
		borderStyle: 'solid',
	},
	centerItemText:{
		textAlign: 'center',
		color: '#fdba15',
	},
	centerL:{
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
	},
	centerR:{
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
	},
	right:{
		width: 50,
		justifyContent:'center',
		alignItems: 'center',
	}

});




/*<View  style={ {height: 44, alignItems: 'center', justifyContent: 'center',}}>

					<TouchableHighlight
						onPress={()=>{
							console.log( 'back' );
						}}
						>
						<View  style={{width: 80, alignItems: 'center', justifyContent: 'center',}}>
							<Image source={icons.live_room_back } style={{height: 36, width: 36, tintColor: '#aaa'}} />
						</View> 
					</TouchableHighlight>
					<View style={{flex: 1, alignItems: 'center'}}>
						<Text style={{fontSize: 18, textAlign: 'center',}}>{this.title}</Text>
					</View>
					<View style={{width: 80,}}>
					</View>
				</View>
				<WebView 
					ref="mywebview"
					source={{ uri: this.state.url }}
					automaticallyAdjustContentInsets={false}
					style={style.webView}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					decelerationRate="normal"
					startInLoadingState={true}
					scalesPageToFit={true}
				/>*/