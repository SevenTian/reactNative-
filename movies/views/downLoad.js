import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class DownLoad extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>首页</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1
	}
});
module.exports = DownLoad;