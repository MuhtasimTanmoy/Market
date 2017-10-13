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
            <div className='row firstRow'>


              <TopBarTitle/>
              <Topbar/>
              <TopBarOption/>

              {/* <h3 style={{padding: '15px', borderBottom: '1px solid #ddd', textAlign: 'center', margin: 0, color: 'red'}}>Select  Net Type</h3> */}

            </div>
            <div className='row secondRow'>
              <div className='three wide column'></div>
              <div className='thirteen wide column mainBody'>
                {this.props.content}
              </div>

            </div>
          </div>
      );
  }
}
