import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import CardItem from '/imports/ui/components/segment/CardItem.jsx';
import CardItem2 from '/imports/ui/components/segment/CardItem2.jsx';



export default class HomePageContent extends Component {
  constructor() {
    super();
  }

  render() {




    return (
      <div className='ui' style={{padding:"20px 80px"}}>


        <div className="ui link cards">

        <CardItem2/>
        
        </div>






      </div>
    )
  }
}
