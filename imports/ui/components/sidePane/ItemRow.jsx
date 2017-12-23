import React, { Component } from 'react';
import Slider from 'react-slick';
import SideList from './SidePane';


export default class ItemRow extends React.Component {

    constructor(){
        super();
        this.state={
            sidePane:"ui segment notVisible",
            sideCarousal:"visible",
            activeList:""
        };
    }
    componentDidMount() {

    //     $('.testPop')
    //     .popup({
    //         popup:".ui.flowing.popup",
    //       inline     : true,
    //       hoverable  : true,
    //       position   : 'right center',          
    //       delay: {
    //         show: 1,
    //         hide: 1
    //       }
    //     })
    //   ;





    }

    showPane(){
        this.setState({
            sidePane:"ui  visible",
            sideCarousal:"notVisible",

        })

    }

    showActiveMode(event){
        console.log("Entered");
        // console.log($(event.target).children("div")[0]);
        console.log($(event.target)[0].innerText);
        let active=$(event.target)[0].innerText;
        active=active.trim();
        this.setState({
            activeList:active, 

        })
    }

    hideSidePane(){
        console.log("out");
        this.setState({
            sidePane:"ui notVisible",
            sideCarousal:"visible",
            activeList:""

        })

    }
    render() {
    settings = {
            accessibility:true,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            arrows:false,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:4000,
          };
      
        
        return (
            <div className="ui grid" onMouseEnter={this.showPane.bind(this)} onMouseLeave={this.hideSidePane.bind(this)} >
                <div className="three wide  column" style={{background:"#fff",padding:"0",margin:"0"}}>
                    <div className="ui vertical fluid tabular menu">

                    <div onMouseEnter={this.showActiveMode.bind(this)} >
                       <Item name="Electronics"/>
                       </div>
                       <div onMouseEnter={this.showActiveMode.bind(this)} ><Item name="Book"/></div>
                       <div onMouseEnter={this.showActiveMode.bind(this)} >
                       <Item name="Men's wear"/>
                       </div>
                       <div onMouseEnter={this.showActiveMode.bind(this)} ><Item name="Women's wear"/></div>
                       <div onMouseEnter={this.showActiveMode.bind(this)} >
                       <Item name="Mobile"/>
                       </div>
                       <div onMouseEnter={this.showActiveMode.bind(this) } ><Item name="Gadget"/></div>
                       <div onMouseEnter={this.showActiveMode.bind(this)} >
                       <Item name="Shoe"/>
                       </div>
                       <div onMouseEnter={this.showActiveMode.bind(this)} ><Item name="Custom"/></div>              
                    </div>
                </div>
                <div className="thirteen wide stretched column" style={{padding:"0",margin:"0"}}>
                  
                    <div className={this.state.sideCarousal}>
                    <Slider {...settings}>
        <div className="ui segment" style={{height:"300px",background:"#000"}}></div>
        <div className="ui segment" style={{height:"300px",background:"#00f"}}></div>

        <div className="ui segment" style={{height:"300px",background:"#0f0"}}></div>

        <div className="ui segment" style={{height:"300px",background:"#f00"}}></div>

        <div className="ui segment" style={{height:"300px",background:"#ff0"}}></div>
        
      </Slider>
      </div>




      <div className={this.state.sidePane} style={{background:"#fff",padding:"10px"}}>
            <SideList name={this.state.activeList}/>
      </div>
{/* 
<div className="ui flowing popup top left transition hidden">
<div className="ui three column divided center aligned grid">
  <div className="column">
    <h4 className="ui header">Basic Plan</h4>
    <p><b>2</b> projects, $10 a month</p>
    <div className="ui button">Choose</div>
  </div>
  <div className="column">
    <h4 className="ui header">Business Plan</h4>
    <p><b>5</b> projects, $20 a month</p>
    <div className="ui button">Choose</div>
  </div>
  <div className="column">
    <h4 className="ui header">Premium Plan</h4>
    <p><b>8</b> projects, $25 a month</p>
    <div className="ui button">Choose</div>
  </div>
</div>
</div> */}




    

                
            </div>
            </div>
        )
    }
}


class Item extends React.Component{

    constructor(){
        super();
        this.state={
            name:"item"
        }
    }

    makeActive(){
        this.setState({
            name:"item active"
        })

    }

    makeInActive(){
        this.setState({
            name:"item"
        })
    }

    render(){
        return (
            <a className={this.state.name} onMouseOver={this.makeActive.bind(this)} onMouseLeave={this.makeInActive.bind(this)} >
            <i className="child left floated icon"></i>
            <div className="content">
            {this.props.name}
            </div>
            </a>
        );
    }
}


