import React, { Component } from 'react';

import Topbar from '/imports/ui/components/topbar/Topbar.jsx';
import TopBarOption from '/imports/ui/components/topbar/TopbarOptions.jsx';
import TopBarTitle from '/imports/ui/components/topbar/TopbarTitle.jsx';

export default class SampleLayout  extends Component{
  constructor(props){
    super(props);
  }


  render(){
    console.log("layout is being renderred...");

      return(
          <div className="ui grid">
            <div className='row firstRow' >

              <TopBarTitle/>
              <Topbar/>
              <TopBarOption/>

              


            </div>
            <div className='row secondRow'>
              <div className='sixteen wide column mainBody'>
                {this.props.content}
              </div>

            </div>
          </div>
      );
  }
}
