import React, { Component } from 'react';

import Header from '../components/common/Header';




export default class Layout  extends Component{
  constructor(props){
    super(props);
  }


  render(){
    console.log("layout is being renderred...");

      return(
          <div className="ui grid">
            <div className='row firstRow'>
              <Header/>
            </div>
            {/* <div className="row itemRow">
            <ItemRow/>
            </div> */}
            <div className='row secondRow'>
              <div className='sixteen wide column mainBody'>
                {this.props.content}
              </div>

            </div>
          </div>
      );
  }
}
