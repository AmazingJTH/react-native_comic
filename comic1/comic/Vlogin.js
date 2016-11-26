'use strict';

import React from 'react';
import styles from './VhostStyle.js';
import imgs from '../res/vhot.js';

import {
	View,
	Image,
	Text,
} from 'react-native';

export default React.createClass({
	render() {
		return (
			<View style={styles.VloginContainer}>
				<Image 
					style={{height:280,width:280}}
					source={ imgs.bg_empty_not_login}
				/>
				<Image 
					style={{height:30,width:280}}
					source={ imgs.bg_feed_sub_empty_desc }
				/>
			</View>
		)
	}
})