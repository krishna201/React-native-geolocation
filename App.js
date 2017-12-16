/**
 * @Author: H krishna
 * @Date:   2017-12-16T19:49:05+05:30
 * @Email:  krishnahare201@gmail.com
 * @Filename: App.js
 * @Last modified by:   H krishna
 * @Last modified time: 2017-12-17T00:29:58+05:30
 */




import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FetchLocation from './components/FetchLocation';





export default class App extends React.Component{
  getUserLocationHandler =() =>{
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position);
      alert(position.coords.longitude+","+position.coords.latitude);
      // alert();
    },err => console.log('kril',err));
  // console.log("press button");
  // alert("kriall")
  }
  render() {
    return (
      <View style={styles.container}>
      <FetchLocation onGetLocation={this.getUserLocationHandler}/>
      {/* <Text>krisj</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
