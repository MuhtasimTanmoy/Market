import React, { Component } from 'react';

export default class TopBarOption extends React.Component{
  render(){
    return(
      <div className='seven wide column topBar'>
        <div className="ui six column grid">
          <div className="right floated column"></div>
          <div className="right floated column"></div>
          <div className="right floated column"></div>

      <div className="right floated column hover" style={{textAlign:'center'}}><h3 >Cart</h3></div>
      <div className="right floated column hover"><h3>Wish List</h3></div>
      <div className="right floated column hover"><h3>Sign In</h3></div>
    </div>

      </div>
    )
  }
}
