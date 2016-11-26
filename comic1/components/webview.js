'use strict';
/*
	remnelist.js
	热门列表 的 nav
*/

import icons from '../res/public.js';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  WebView
} from 'react-native';



//// nav
// 这里是   Nav 部分的 组件抽离
export default  class MyWebView extends Component{

	constructor(props){
		super(props);
		console.log( this.props );
	}


	back(){

		console.log( 'ababababb' );
		this.props.icnavigator.pop();
		// console.log( this.props.route.url );
	}

	////
	render(){
		return (
			<View style={{flex: 1 }} >
				<View  
					style={{
						height: 44, 
						alignItems: 'center',  
						justifyContent: 'center',
						flexDirection: 'row',
						backgroundColor: '#fff',
						borderBottomWidth: 2,
						borderColor: '#ddd',

					}}>

					<TouchableHighlight
						onPress={ this.back.bind(this) }
					>
						<View  style={{width: 80, alignItems: 'center', justifyContent: 'center',}}>
							<Image style={{ height: 40, width: 40 }} source={ icons.ic_collection_pre_pressed } />
						</View>  
					</TouchableHighlight>
					<View style={{flex: 1, alignItems: 'flex-start'}}>
						<Text style={{fontSize: 18, color: '#222',  }}>{  (this.props.route.rowDate.title).substr(0,10) }</Text>
					</View>
					<View style={{width: 80,}}>
						<Text style={{ color: '#fa4940',  }}>标题</Text>
					</View>
				</View>

				<WebView 
					ref="mywebview"
					source={{ uri: this.props.route.rowDate.url }}
					automaticallyAdjustContentInsets={false}
					style={style.webView}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					decelerationRate="normal"
					startInLoadingState={true}
					scalesPageToFit={true}
				/>
			</View>
		)
	}
}

/// style
// 这是什么呀  对就是这里哈
// 这里是样式表  样式抽离么！  其实我觉地还是不要抽离的好 这样就可以更快的找到样式在哪里了
const style = StyleSheet.create({
	backBox:{
		height: 44,
		backgroundColor: '#da9'
	}
});