'use strict';

import React,{ Component } from 'react';
import Swiper from 'react-native-swiper';
import styles from '../styles/discoverystyle';
import {
  Text,
  View,
  Image,
  Button,
  ListView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const REQUEST_URL = 'http://api.kkmh.com/v1/topic_new/discovery_list';
// var sliderImgs = [
// 	'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
// 	'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
// 	'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
// ];
export default React.createClass({
  getInitialState() {

    this.fetchData();

    return {
      imgs: null,
      classic: null,
      human: null,
      loading: true
    }
  },

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        // console.log(responseData.data.infos[0].banners);
        this.setState({
          imgs: responseData.data.infos[0].banners,
          classic: responseData.data.infos[1].topics,
          human: responseData.data.infos[3].topics,
          loading: false
        })
        console.log(this.state.imgs);
      })
      .done();
  },
  onButtonPress(){
    console.log('Button has been pressed!');
  },

  render() {
    if(this.state.loading){
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="orange" />
          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.swiper}>
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={true}>
            <Image style={[styles.slide]} source={{uri: this.state.imgs[0].pic}}></Image>
            <Image style={[styles.slide]} source={{uri: this.state.imgs[1].pic}}></Image>
            <Image style={[styles.slide]} source={{uri: this.state.imgs[2].pic}}></Image>
            <Image style={[styles.slide]} source={{uri: this.state.imgs[3].pic}}></Image>
            <Image style={[styles.slide]} source={{uri: this.state.imgs[4].pic}}></Image>
          </Swiper>
        </View>

        <View style={styles.classical}>
          <View style={styles.clshead}>
            <View><Text style={styles.left}>热门经典</Text></View>
            <View style={styles.more}><Text style={styles._more}>></Text></View>
          </View>
          <View style={styles.cont}>
            <View style={styles.item}>
              <Image style={[styles.img]} source={{uri: this.state.classic[0].pic}}></Image>
              <Text style={styles.tit}>{this.state.classic[0].title}</Text>
              <Text style={styles.recommended}>{this.state.classic[0].recommended_text}</Text>
            </View>
            <View style={styles.item}>
              <Image style={[styles.img]} source={{uri: this.state.classic[1].pic}}></Image>
              <Text style={styles.tit}>{this.state.classic[1].title}</Text>
              <Text style={styles.recommended}>{this.state.classic[1].recommended_text}</Text>
            </View>
            <View style={styles.item}>
              <Image style={[styles.img]} source={{uri: this.state.classic[2].pic}}></Image>
              <Text style={styles.tit}>{this.state.classic[2].title}</Text>
              <Text style={styles.recommended}>{this.state.classic[2].recommended_text}</Text>
            </View>
            <View style={styles.item}>
              <Image style={[styles.img]} source={{uri: this.state.classic[3].pic}}></Image>
              <Text style={styles.tit}>{this.state.classic[3].title}</Text>
              <Text style={styles.recommended}>{this.state.classic[3].recommended_text}</Text>
            </View>
            <View style={styles.item}>
              <Image style={[styles.img]} source={{uri: this.state.classic[4].pic}}></Image>
              <Text style={styles.tit}>{this.state.classic[4].title}</Text>
              <Text style={styles.recommended}>{this.state.classic[4].recommended_text}</Text>
            </View>
            <View style={styles.item}>
              <Image style={[styles.img]} source={{uri: this.state.classic[5].pic}}></Image>
              <Text style={styles.tit}>{this.state.classic[5].title}</Text>
              <Text style={styles.recommended}>{this.state.classic[5].recommended_text}</Text>
            </View>
          </View>
        </View>

        <View style={styles.grey}></View>

        <View style={styles.human}>
          <View style={styles.clshead}>
            <View><Text style={styles.left}>人气飙升</Text></View>
            <View style={styles.more}><Text style={styles._more}>></Text></View>
          </View>
          <View style={styles.list}>
            <Image style={styles.li} source={{uri: this.state.human[0].pic}}></Image>
            <Image style={styles.li} source={{uri: this.state.human[1].pic}}></Image>
            <Image style={styles.li} source={{uri: this.state.human[2].pic}}></Image>
            <Image style={styles.li} source={{uri: this.state.human[3].pic}}></Image>
          </View>
        </View>

        <View style={styles.article}>
          <Button
            onPress={this.onButtonPress}
            style={styles.btn}
            title="我要投稿"
            color="blue"
          />
          <Button
            onPress={this.onButtonPress}
            style={styles.btn}
            title="全部作品"
            color="red"
          />
        </View>
        </ScrollView>
      </View>
    )
  }
});
