'use strict';
/*
	Component Header
*/

//  原生组件 引入
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ListView,
  ScrollView,  
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';


/// 资源导入
import icons from '../res/horNavigator.js';


/// 组件导入
import MyWebView from '../components/webview.js';


/// test 什么情况
/// 已经发展成可以抽离的部分了  哈哈哈
export default class RemenList extends Component{

	/// 数据初始化
	constructor( props ){
		super( props );
		// console.log( this );
		// console.log( this );

		this.state = {
			loading: true,
			url: this.props.route.url,
			page:this.props.route.page,
			xuyaoloading: this.props.route.xuyaoloading,
			data:  new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
		};

		
		this.fetchData();
	}

	//// 数据请求
	fetchData() {

		if( !this.state.xuyaoloading ){
			return;
		}


		let url = this.state.url;
		fetch( url )
			.then(response => response.json())
			.then(responseData => {
				// console.log(responseData);
				this.setState({
					data: this.state.data.cloneWithRows(responseData.data.comics),
					loading: false
				})
			})
			.done();
	}


	goWebView( event , rowDate ){
		console.log( 'abcd' );
		console.log( this );

		this.props.icnavigator.push({
			name: 'webview',
			rowDate: rowDate,
			component: MyWebView
		});
	}


	// render 函数
	/// listview item   render  这个方法最重要哦 
	renderDataItem(rowDate){
		// console.log( rowDate.cover_image_url );
		return (
			<View style={ listStyle.item } >
				<View style={ listStyle.top } >
					<View style={listStyle.topleft}>
						<Text style={ listStyle.topleftText }>{rowDate.label_text}</Text>
					</View>
					<View style={listStyle.topTitle}>
						<Text style={{color: '#222', fontSize: 14 }}>{rowDate.topic.title}</Text>
					</View>
					<View style={listStyle.topUserName}>
						<Image style={ listStyle.footImg }  source={ icons.ic_kuaikan_author_comic_avatar }/>
						<Text style={{ paddingLeft: 5, fontSize: 14, color: '#aaa'}}>{rowDate.topic.user.nickname}</Text>
					</View>
				</View>
				<TouchableHighlight 
					onPress={ (event) => this.goWebView(event, rowDate ) }
					>
					<View style={{height: 240, alignItems: 'stretch' }}>
						<Image style={listStyle.img } source={{uri: rowDate.cover_image_url}} />
					</View>
				</TouchableHighlight>
				<View style={listStyle.foot}>
					<View style={listStyle.footTitle}>
						<Text style={{color: '#222'}}>{rowDate.title}</Text>
					</View>
					<View style={listStyle.footInfo}>
						<View style={[listStyle.likes, listStyle.topUserName]}>
							<Image style={ listStyle.footImg } source={icons.ic_home_praise_normal}/>
							<Text style={{color: '#ccc'}}>{ this._ItemCount( rowDate.likes_count ) }</Text>
						</View>
						<View style={[listStyle.comments, listStyle.topUserName]}>
							<Image style={ listStyle.footImg } source={icons.ic_home_comment_normal}/>
							<Text style={{color: '#ccc'}}>{this._ItemCount(rowDate.comments_count)}</Text>
						</View>
					</View>
				</View>
			</View>
		)
	}

	/// 这个么  将大数字转化为 带单位的
	_ItemCount( count ){
		count = parseInt(count);
		if(  count > 9999 ){
			count =  parseInt( count / 10000 )  + '万';
		}
		return count;
	}


	/// 
	/// render 方法 
	render (){

		/// loading 方法
		if ( this.state.loading ){
			return (
				<View style={listStyle.Vmiddle}>
					<View style={listStyle.Vloading}>
						<ActivityIndicator size="large" color="#6435c9"/>
					</View>
				</View>
			)
		}

		/// list View 
		return (
			<ListView 
				dataSource = {this.state.data}
				renderRow={this.renderDataItem.bind(this)}
			/>

		)
	}
}





///// 这个是要拿走的
const listStyle = StyleSheet.create({

	Vmiddle: {
		flex: 1,
	},
	Vloading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	// item box item中最大的那个盒子
	item:{
		backgroundColor: '#fff',
		borderTopColor:'#ddd',
		borderTopWidth: 0.5,
		marginBottom: 10,
	},
	// top 文字样式
	top:{
		height: 44,
		// justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
	},
	topleft:{
		width: 80,
		justifyContent: 'center',
		alignItems: 'center',
	},
	topleftText:{
		height: 18, 
		width: 50, 
		fontSize: 12,
		borderRadius: 9, 
		textAlign: 'center', 
		color: '#fff',
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: 'rgba(200, 100,100, 0.5)'
	},
	topTitle:{
		flex: 1,
	},
	topUserName:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingRight: 5,
	},
	img:{
		height: 240,
	},
	foot:{
		height: 36,
		borderBottomWidth: 0.8,
		borderBottomColor: '#ddd',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 5,
		paddingRight: 5,
	},
	footImg:{
		height: 18, width: 18,tintColor: '#ccc', paddingRight: 5
	},
	footTitle:{
		flex: 1,
	},
	footInfo:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	likes:{},
	comments:{},
});

/* 
<Image  style={{ width: 400}} source={ icons.ic_common_placeholder_s_115 } >
								<Image style={listStyle.img } source={{uri: rowDate.cover_image_url}} />
						</Image>*/