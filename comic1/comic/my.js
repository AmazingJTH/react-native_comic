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
  TextInput,
  ListView,
  ScrollView,
} from 'react-native';


 export default class MyComponent extends Component {
	render(){
		return (
			<ScrollView>
			<View style={ myStyle.box }>
				<View style={ myStyle.head }>
					<Image style={myStyle.headImgae } source={{ uri: 'http://qiniu.kuaikanmanhua.com/static/img/we/ico-face_4311cd1.jpg' }} />
					<Text style={myStyle.headText }> 登录 </Text>
				</View>
				<View>
					<EmptyBox />
					<RowBox title="我的消息" />
					<EmptyBox />
					<RowBox title="我的关注" />
					<RowBox title="我的收藏"  topline="1"/>
					<EmptyBox />
					<RowBox title="快看商城" tapUrl="http://qiniu.kuaikanmanhua.com/static/img/we/ico-face_4311cd1.jpg" />
					<RowBox title="我的订单" topline="1" />
					<EmptyBox />
					<RowBox title="浏览历史" />
					<RowBox title="智能缓存"  imageUrl="http://qiniu.kuaikanmanhua.com/static/img/we/ico-face_4311cd1.jpg" text="下载今天已更新漫画" topline="1" />
					<EmptyBox />
					<RowBox title="设置" />
					<EmptyBox />
				</View>
			</View>
			</ScrollView>
		);
	}
}

/*+/++*/
const myStyle = StyleSheet.create({
	box:{
		flex: 1,
	},
	head:{
		height: 200,
		backgroundColor: '#ffd705',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headImgae:{
		height: 60,
		width: 60,
		borderRadius: 30,
	},
	headText:{
		fontSize: 14,
		color: '#555',
		textAlign: 'center',
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
	centerL:{
		width: 70,
		backgroundColor: '#fff',
		justifyContent: 'center',
		height: 30,
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
	},
	centerR:{
		width: 70,
		height: 30,
		justifyContent: 'center',
		backgroundColor: '#5f6',
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
	},
	right:{
		width: 50,
		justifyContent:'center',
		alignItems: 'center',
	}

});


class EmptyBox extends Component {
	render(){

		let height = this.props.height  || 10 ;
		return (
			<View 
				style={{ 
					backgroundColor: '#eee' , 
					borderTopWidth: 0.8 ,
					borderBottomWidth: 0.8, 
					borderColor: '#ccc',
					height}}></View>
		)
	}
}

/*+/++*/
class RowBox extends Component {

	// 短一点线
	topLine(){
		if( this.props.topline  ){
			return (
				<View style={{ height: 0.8, backgroundColor: '#ddd', marginLeft: 15 }}></View>
			)
		} 
		return (
			<View style={{ height: 0, backgroundColor: '#ddd', marginLeft: 15 }}></View>
		);
	}

/*+/++*/
// content 内容
	rowContent(){
		var conViews = [];
		if( this.props.title ) {
			conViews.push( 
				<View key={conViews.length}>
					<Text  style={rowStyle.title }>{ this.props.title }</Text>
				</View> 
			);
		}
		if( this.props.text ) {
			conViews.push( 
				<View key={conViews.length}>
					<Text  style={rowStyle.text}>{ this.props.text }</Text>
				</View> 
			);
		}
		
		return conViews;
	}

/*+/++*/
// right 内容
	rowRight(){
		var views = [];

		// 是否添加 标签图片
		if( this.props.tapUrl ){
			views.push(
				<Image key={views.length} style={ rowStyle.imgTap } source={ {uri: this.props.tapUrl} } /> 
			);
		}
		// 设置默认图片
		if( this.props.imageUrl ){
			views.push(
				<Image key={views.length} style={ rowStyle.img } source={{uri: this.props.imageUrl }} />
			);
		}else{
			views.push(
				<Image key={views.length} style={ rowStyle.img } source={ {uri: 'http://qiniu.kuaikanmanhua.com/static/img/we/ico-face_4311cd1.jpg'} } /> 
			);
		}

		return views;
	}

/*+/++*/
	render(){
		return (
			<View style={rowStyle.box}>
				{this.topLine()}
				<View style={rowStyle.conbox}>
					<View style={rowStyle.left}>
						<Image 
							style={ rowStyle.img } 
							source={ {uri: 'http://qiniu.kuaikanmanhua.com/static/img/we/ico-face_4311cd1.jpg' }} 
							/>
					</View>
					<View style={ rowStyle.content }>
						{ this.rowContent() }
 					</View>
					<View style={ rowStyle.right }>
						{ this.rowRight() }
					</View>
				</View>
			</View>
		)
	}
}

/*+/++*/
const rowStyle = StyleSheet.create({
	box:{
		backgroundColor: '#fafafa',
	},
	conbox:{
		paddingTop: 10,
		paddingBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	img:{
		height: 30,
		width: 30,
	},
	left:{
		width: 40,
		paddingRight: 5,
		alignItems: 'flex-end',
	},
	content:{
		flex: 1,
	},
	right:{
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent:'space-around',
		paddingRight: 10,
	},
	imgTap:{
		height: 20,
		width: 40,
		marginRight: 5,
	},

	text:{
		fontSize: 12,
		color: '#aaa',
	},
	title:{
		fontSize: 14,
		color: '#111',
	}
});