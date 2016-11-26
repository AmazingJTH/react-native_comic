'use strict';

import React from 'react';
import styles from './VhostStyle.js';
import imgs from '../res/vhot.js';


import {
	Text,
	View,
	Image,
	ListView,
	TouchableHighlight,
	ActivityIndicator,
} from 'react-native';


const REQUEST_URL = 'http://api.kkmh.com/v1/feeds/feed_lists?uid=&since=0&page_num=1&catalog_type=2';



export default React.createClass({
	getInitialState() {
		this.fetchData();
		return {
			Vhot: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
			loading: false
		}
	},
	fetchData() {
		fetch(REQUEST_URL)
			.then(response => response.json())
			.then(responseData => {
				console.log(responseData.data.feeds);
				this.setState({
					Vhot: this.state.Vhot.cloneWithRows(responseData.data.feeds),
					loaded: true
				})
			})
			.done();
	},
	add0(m) {
		return m < 10 ? '0' + m : m
	},
	format(shijianchuo) {
		//shijianchuo是整数，否则要parseInt转换
		var time = new Date(shijianchuo);
		var y = time.getFullYear();
		var m = time.getMonth() + 1;
		var d = time.getDate();
		var h = time.getHours();
		var mm = time.getMinutes();
		var s = time.getSeconds();
		// return y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
		return this.add0(m) + '-' + this.add0(d) + '  ' + this.add0(h) + ':' + this.add0(mm);
	},
	renderVhot(vhot) {
		return (
			<TouchableHighlight
				underlayColor="rgba(34, 26, 38, 0.1)"
			>
			<View style={styles.item}>
				<View style={styles.VuserInfo}>
					<View style={styles.VuserInfoL}>
						<Image
							source={{uri:vhot.user.avatar_url}}
							style = {[styles.VhotImage,styles.VuserPhoto]}
						>
						</Image>
						<Text>{vhot.user.nickname}</Text>
						<Image 
							source={ imgs.ic_v_author_detail_avatar_normal }
							style={styles.Vvip}
						/>
					</View>
					<Image 
						style={styles.VaddFocus}
						source={ imgs.ic_subscribe_button_normal }
					/>
				</View>
				<View style={styles.Vtext}>
					<Text style={styles.Vtexts}>{vhot.content.text}</Text>
				</View>
				<View style={styles.Vimage}>
					{
						vhot.content.images.map(( item, index)=>{
							return(
							<Image
								key = {index}
								source={{uri:vhot.content.image_base+item}}
								style = {styles.Vimages}
							/>
							)
						})
					}
				</View>
				<View style={styles.Vcomments}>
					<View>
					    <Text>{this.format(vhot.updated_at)}</Text>
					</View>
					<View style={styles.VcommentsR}>
						<View style={styles.VcommentsR}>
							<Image 
								style={{height:20,width:20,marginLeft:10}}
								source={imgs.ic_details_toolbar_praise_normal}
							/>
							<Text>{vhot.likes_count}</Text>
						</View>
						<View style={styles.VcommentsR}>
							<Image 
								style={{height:20,width:20}}
								source={ imgs.ic_details_comment_normal}
							/>
							<Text>{vhot.comments_count}</Text>
						</View>
					</View>
				</View>
				<View style={styles.V1px}></View>
			</View>
			</TouchableHighlight>
		)
	},

	//// 
	render() {

		if (!this.state.loaded) {
			return (
				<View style={styles.Vmiddle}>
					<View style={styles.VtopTitle}>
						<Text style={[styles.Vhot,styles.VtopTitleActive]}>热门</Text>
						<Text style={styles.Vnew}>最新</Text>
					</View>
					<View style={styles.Vloading}>
						<ActivityIndicator size="large" color="#6435c9"/>
					</View>
				</View>
			)
		}

		return (
			<View>
				<View style={styles.VtopTitle}>
					<Text style={[styles.Vhot,styles.VtopTitleActive]}>热门</Text>
					<Text style={styles.Vnew}>最新</Text>
				</View>
				< View >
					<ListView 
						dataSource = {this.state.Vhot}
						renderRow={this.renderVhot}
					/> 
				< /View>
			</View>
		)
	}
})