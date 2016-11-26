'use strict';
/*
	remne.js
	热门  的 内容
	这样的 haunted是不是就少些文字内容来哦   对  少些了哦
*/

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

// 自定义组件导入
// import Header from '../components/Header.js';
// import RemenList from './remenlist.js';
// import RemenList from './remenlist.js';

/// 资源导入
import icons from '../res/horNavigator.js';
import style from './FoundStyle.js';


////  horTab 导入
import HorTab from '../components/horNavigator.js';


// 整个热门  Component  这个组件也很重要  但是呢  这里有些简单哈  应为逻辑不在这里哈
// d但是有个 文件阐述过程
export default class Remen extends Component {
	render(){

		var tags = [ 
			{"tag_id": 0,"title": "全部"},{"tag_id": 20,"title": "恋爱"},{"tag_id": 24,"title": "爆笑"},
			{"tag_id": 22,"title": "奇幻"},{"tag_id": 32,"title": "恐怖"},
			{"tag_id": 36,"title": "耽美"},{"tag_id": 23,"title": "剧情"},
			{"tag_id": 44,"title": "成人"},{"tag_id": 19,"title": "日常"},
			{"tag_id": 27,"title": "治愈"},{"tag_id": 45,"title": "百合"},
			{"tag_id": 41,"title": "三次元"}
		];


		var horRoutes = tags.map((item, index)=>{
			return {
				title: item.title, 
				id: item.tag_id, 
				page: 0, 
				component: FondList, 
				url: `http://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=${item.tag_id}&since=0&count=20`, 
				xuyaoloading: item.tag_id == 0
			}
		});

		return(
			<View style={{ flex: 1 }} >
				<HorTab 
					horRoutes = { horRoutes }
					reverse = { false }
					icnavigator={ this.props.icnavigator } 
				/>
			</View>
		)
	}
}


class FondList extends Component{


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
				console.log(responseData);
				this.setState({
					data: this.state.data.cloneWithRows(responseData.data.topics),
					loading: false
				})
			})
			.done();
	}


	// render 函数
	/// listview item   render  这个方法最重要哦 
	renderDataItem(rowDate){
		// console.log( rowDate.cover_image_url );
		return (
			<View style={ style.itemBox  } >
				<View style={ style.imgbox } >
					<Image style={style.imgstyle} source={{uri: rowDate.cover_image_url}} />
				</View>
				<View style={ style.itemConBox }>
					<View style={ style.titleBox } >
						<View style={ style.title}>
							<Text sryle={ style.titleText }> { rowDate.title } </Text>
						</View>
						
						<View style={style.guanzhu} >
							<Text style={style.guanzhuText}> + 关注 </Text>
						</View>

					</View>
					<View style={ style.nickname } >
						<Text style={ style.nicknameText}>{ rowDate.user.nickname }</Text>
					</View>
					<View style={ style.other } >
						<View style={style.likes} >
							<Image style={ style.iconsImg } source={icons.ic_home_praise_normal}/>
							<Text style={ style.itemText }>{ this._ItemCount( rowDate.likes_count ) }</Text>
						</View>
						<View style={ style.comments }>
							<Image style={ style.iconsImg } source={icons.ic_home_comment_normal}/>
							<Text style={ style.itemText }>{this._ItemCount(rowDate.comments_count)}</Text>
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

	render(){
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
				style={{backgroundColor:'#fafafa'}}
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
	}
});