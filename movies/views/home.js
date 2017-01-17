import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//import ImageScroll from './../Util/imageScroll';

//引入组件
var Swiper = require('react-native-swiper');

export default class Home extends Component{
	render(){
		return(
			<Swiper height={200}
                 paginationStyle={{bottom:10}}
			     autoplay={true}
			     dot={this._indexView('white')}
			     activeDot={<View style={[styles.swiperIndexView, {backgroundColor:'green'}]}></View>}
		     >
                {this._scrollImg()}
            </Swiper>
		);
	}
	_scrollImg(){
        var imageViews=[];
        var images=[
		    'http://ojm0517sf.bkt.clouddn.com/1.jpg',
		    'http://ojm0517sf.bkt.clouddn.com/2.jpg',
		    'http://ojm0517sf.bkt.clouddn.com/3.jpg',
		    'http://ojm0517sf.bkt.clouddn.com/4.jpg'
		     ];
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{flex:1}}
                    source={{uri:images[i]}}
                    />
            );
        }
        return imageViews;
    }
    _indexView(color){
		let view = <View style={[styles.swiperIndexView, {backgroundColor:color}]}></View>;
		return view;
    }
}

var styles = StyleSheet.create({
	swiper:{
		height:200
	},
	swiperIndexView:{
		width:8,
		height:8,
		borderRadius:4,
		marginLeft:3,
		marginRight:3
	}, 
});
module.exports = Home;