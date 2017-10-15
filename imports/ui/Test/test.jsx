import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import CardItem from '/imports/ui/components/segment/CardItem.jsx';
import CardItem2 from '/imports/ui/components/segment/CardItem2.jsx';
import Slider from 'react-slick';



export default class Test extends Component {
  constructor() {
    super();
  }

  render() {


    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
      const {className, style, onClick} = props
      return (
        <div
          className={className}
          style={{...style, display: 'block', background: 'red'}}
          onClick={onClick}
        ></div>
      );
    }
    
    function SamplePrevArrow(props) {
      const {className, style, onClick} = props
      return (
        <div
          className={className}
          style={{...style, display: 'block', background: 'green'}}
          onClick={onClick}
        ></div>
      );
    }




    return (
      <div className='ui' style={{padding:"20px 80px"}}>


        <div className="ui link cards">

        <CardItem2/>
        
        </div>

        <Slider {...settings}>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       <div className="ui link cards" > <CardItem2/></div>
       

      </Slider>








      </div>
    )
  }
}
