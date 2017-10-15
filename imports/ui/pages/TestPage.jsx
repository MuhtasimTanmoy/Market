import React, { Component } from 'react';

import SampleLayout from '/imports/ui/layouts/SampleLayout.jsx';
import Test from '/imports/ui/Test/test.jsx';

export default class TestPage extends Component{

  render(){
    console.log("TestPage being rendered");

      return(
        <SampleLayout content={<Test/>}/>
      );
  }
}
