/**
 * @Author: H krishna
 * @Date:   2017-12-16T22:54:36+05:30
 * @Email:  krishnahare201@gmail.com
 * @Filename: FetchLocation.js
 * @Last modified by:   H krishna
 * @Last modified time: 2017-12-16T23:41:44+05:30
 */
import React from 'react';

import {Button} from 'react-native';

const fatchLocation = props =>{
  return(
    <Button title="get location" onPress={props.onGetLocation} />
  );

};

export default fatchLocation;
