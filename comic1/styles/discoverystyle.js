'use strict';

import React from 'react-native';

let { StyleSheet } = React;

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  classical:{

    padding: 6,
    backgroundColor: '#fff',
  },
  clshead:{
    height:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left:{
    fontSize:16,
    fontWeight:'500',
  },
  more:{
    width:26,
    height:20,
    backgroundColor: '#eee',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  _more:{
    color:'#fff',
    fontSize:14,
  },

  cont:{
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  item:{
    width: 106,
    height: 170,
    marginLeft:5,
    marginRight:5,
  },
  img:{
    width: 106,
    height: 120,
  },
  tit:{
    fontSize:14,
    color: '#000',
  },
  recommended:{
    fontSize:14,
    color: '#eee',
  },
  grey:{
    height: 10,
    backgroundColor: '#ddd',
  },
  human:{
    flex:1,
    padding: 6,
    backgroundColor: '#fff',
  },
  list:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  },
  li:{
    margin:4,
    width: 320,
    height: 180,
    flex:1,
  },


  article:{
    padding: 6,
    backgroundColor: '#fff',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  btn:{
    width:100,
    height:40,
  },
});
