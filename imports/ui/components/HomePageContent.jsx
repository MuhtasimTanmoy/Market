import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import CardItem from '/imports/ui/components/segment/CardItem.jsx';
import CardItem2 from '/imports/ui/components/segment/CardItem2.jsx';
import Slider from 'react-slick';
import ItemRow from '../components/sidePane/ItemRow';



export default class HomePageContent extends Component {
  constructor() {
    super();
  }

  render() {


    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
      const {className, style, onClick} = props
      return (
        <div
          className={className}
          onClick={onClick}
        ></div>
      );
    }
    
    function SamplePrevArrow(props) {
      const {className, style, onClick} = props
      return (
        <div
          className={className}
          onClick={onClick}
        ></div>
      );
    }




    return (
      <div>
        <div style={{marginLeft:"40px",marginRight:"40px"}}>
        <ItemRow/>
        </div>
      <div className='ui' style={{padding:"20px 80px"}}>





        <Slider {...settings}>
        <div><CardItem/></div>
        <div><CardItem/></div>

        <div><CardItem/></div>

        <div><CardItem/></div>

        <div><CardItem/></div>


       

      </Slider>








      </div>
      </div>
    )
  }
}
