import React, { Component } from 'react';

export default class SideList extends React.Component{

    renderSidePane(){
        // console.log(this.props.name);
        let sidePane="";
        if(this.props.name=="Electronics"){
            sidePane=<div className="ui three column left aligned grid">
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
          </div>;

        }
        else if(this.props.name=="Book"){
            sidePane=<div className="ui three column center aligned grid">
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
          </div>;

        }
        else if(this.props.name=="Men's wear"){
            sidePane=<div className="ui three column right aligned grid">
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
          </div>;
            
        }
        else if(this.props.name=="Women's wear"){
            sidePane=<div className="ui three column left aligned grid">
            <div className="column">
            <h4 className="ui header">Women</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Women</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
          </div>;
            
        }
        else if(this.props.name=="Mobile"){
            sidePane=<div className="ui three column left aligned grid">
            <div className="column">
            <h4 className="ui header">Mobile</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Mobile</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
          </div>;
            
        }
        else if(this.props.name=="Gadget"){
            sidePane=<div className="ui three column left aligned grid">
            <div className="column">
            <h4 className="ui header">Business</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Gadget</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Gadget</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
          </div>;
            
        }
        else if(this.props.name=="Shoe"){
            sidePane=<div className="ui three column left aligned grid">
            <div className="column">
            <h4 className="ui header">Shoe</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Shoe</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Shoe</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
          </div>;
            
        }
        else {
            sidePane=<div className="ui three column left aligned grid">
            <div className="column">
            <h4 className="ui header">Custom</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Custom</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
            <div className="column">
            <h4 className="ui header">Custom</h4>
            <div className="fluid" style={{background:"grey",height:"1px"}}></div>
            <div className="ui link list">
              <a className="item">Design &amp; Urban Ecologies</a>
              <a className="item">Fashion Design</a>
              <a className="item">Fine Art</a>
              <a className="item">Strategic Design</a>
            </div>
            </div>
          </div>;
            
        }

        return sidePane;
    }


    render(){
        return(
            <div>
                {this.renderSidePane()}
            </div>
           
        );
    }
}