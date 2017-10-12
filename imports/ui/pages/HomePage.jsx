import React, { Component } from 'react';

import SampleLayout from '/imports/ui/layouts/SampleLayout.jsx';
import HomePageContent from '/imports/ui/components/HomePageContent.jsx';

export default class HomePage extends Component{

  render(){
    console.log("SamplePage being rendered");

      return(
        <SampleLayout content={<HomePageContent/>}/>
      );
  }
}
