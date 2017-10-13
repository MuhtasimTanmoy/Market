import React,{Component} from "react";
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import CardItem from '/imports/ui/components/segment/CardItem.jsx';


export default class  HomePageContent extends Component {
  constructor() {
    super();
  }

  render(){




    return (
      <div className='ui paddingTopForHeader container '>
          <CardItem/>
      </div>
  )
  }
}
