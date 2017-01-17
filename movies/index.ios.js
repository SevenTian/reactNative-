/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  AsyncStorage
} from 'react-native';

import Home from './views/home';
import Channels from './views/channels';
import DownLoad from './views/downLoad';
import User from './views/user';

var homeImg_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAYAAAAacYo8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMTQyZGE0Zi04MmFjLTFjNDgtODE4Zi1iYTZmZDZkNGYzODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzZCQjExNjRBOTQxMTFFNTgwNkNBOUNFQjVGODVGNkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZCQjExNjNBOTQxMTFFNTgwNkNBOUNFQjVGODVGNkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBiZTQwODBmLTc2YTMtOTY0ZS1iY2U5LWE2N2MwMDAwNmQ0MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjNkNzI0ZjllLTk3MTEtMTFlNS1iNTBmLWI1ZTkwNzJmZmIyZiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiY9lLEAAAPCSURBVHja1Jl5SBVRFMZHEa2MssVIEdvkWZlKBFFBQVDQju20W7YZhW1oWBi0GImW2ELZQtneHxkVZRElBREhpdFiK4ZlpS0qYZRb3+F9D6TNN2/uzHse+HHm6cy8b+69c86553klp2zWFJkPiAFTwEAQDBpAKbgLToM80Kjqy1TYWJAJwv7yPxuZC4rAMnDH6Bd6G7zeC2wHFyn6CUgA/UEA8AfRIAmU8PgWWONu4btBIvgJVoMokAUKQRWoAQ9BGggHW/mw6WCdu4QncNpF3BiwE9T/53x5uA0glus8FYyzWriNS0QEzAY3dFx7jA8tI58NOlopXKbaDxwAuS5cvwtcBkFgi1XCIznF38B6A0tN3ok6EAe6WiF8Iaf5MPhkQPgzcB74gnlWCI+hz1EQ/x33mGi28J4gFHwE9xUIvw5qwQDQxkzhUfQFilL3d/CYGTzSTOE96F9p6sxxr1Azhben/6xQeAV9JzOFN9A3KhTuUqGnV/hb+u4KhXejf2em8CL6YYpEtwJDmrzwpgl/AMpZwkYrED6Bpa+Ifm/2Gj/D4zgFwlfRZ1uROffz5VwAuhgQPR4MYtlw3ArhkjAucIpTDESSNB6nMhFZUtZu5LJZwp2NXlsJeoOXYK+V9XgRq0Mf1tZeOq7tBTbxeDn4YfXWLZkZdCSYo2NzLZuP1lzXV92x56xosltPdzJlS909nCE1wZ27/BzuNwPBUifOT6JfC764U7iExT1OZtNgvpCV4IS7+ypipfSBTryUGvssDZ4gvB99WTPnOXouHVQUOUaE+zNlZ/Fzc22KQq7rSEaUIKuFy07lIPgAdoC2fEmPNHNdDaOK+FlMPvua7KpMEx7A5k0xCywRfBuMpqB6J+5xiVXlOZa0knmfM5mFqRYu2VF6hC/YAJIvPMVUL5EkT+dgyUhPBn3BUf5tPniq2dtz4SqEj2J6l5DXGeSzopvJkTJi0hCKpdBDjDTSh5RW9UkQ4Ypw6W9fA1c4MjJKk5j17mlq7bVm746Fc81LW24Gw+bZf7Utfhfeh9NXwBqkklkuQnOtuanHSkA847303aUtPZUznsum0R/CZR1L0/2RZv/JQ546g52rDN7EKpMN+Qo+QCZr9RgOpuyU/BzCfbkxSOY6k/Vs40h/1dxnZcwTEi63sfxdxMjkK8ITGdKk2hvKGvmN5jlWzkEdTI0jpFjzZiwVm67Zf9bzVJMOwzQeLxbhIfxwU/N8y6cPEeG1/NCuBQh3aKzzYSKQCq9KazlW7M3YKaGmugUIrqbW+F8CDABPb86EgK0RMgAAAABJRU5ErkJggg==';

export default class movies extends Component {
  constructor(){
    super();
    //定义属性
    this.state = {
      selectedTab: 'home'
    };
  }
  render() {
    return (
      <TabBarIOS>
      {this._tabBarItem(homeImg_base64, "首页", 'home')}
      {this._tabBarItem(homeImg_base64, "频道", 'channels')}
      {this._tabBarItem(homeImg_base64, "下载", 'downLoad')}
      {this._tabBarItem(homeImg_base64, "我的", 'user')}
      </TabBarIOS>
    );
  }
  _tabBarItem(img, barTitle, selectedKey){
    let item = (
      <TabBarIOS.Item
        title={barTitle}
        icon={{uri: img, scale: 3}}
        selectedIcon={{uri: img, scale: 3}}
        selected={this.state.selectedTab === selectedKey}
        onPress={() => {
          //设置属性
          this.setState({
            selectedTab: selectedKey
          });
        }}>
        {this._selectedTabType(selectedKey)}
      </TabBarIOS.Item>
      );
      return item;
  }
  _selectedTabType(type){
    let view = <Home></Home>;
    switch (type) {
      case 'home':
        view = <Home></Home>;
        break;
      case 'channels':
        view = <Channels></Channels>;
        break;
      case 'downLoad':
        view = <DownLoad></DownLoad>;
        break;
      case 'user':
        view = <User></User>;
        break;
      default:
        view = <Home></Home>;
        break;
    }
    return view;
  };
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('movies', () => movies);
