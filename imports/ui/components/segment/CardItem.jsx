import React, { Component } from "react";
// import { createContainer } from 'meteor/react-meteor-data';

export default class CardItem extends Component {


    render() {
        console.log(this.props.user);
        return (


            <div className="cardItem">
                <div className="cardHover">
                    {/* <div className="image cardItem">
                        <img src="/images/mathew.png">
                        </img>
                    </div> */}

                    <div className="content">
                        <div className="header">Matt Giampietro</div>
                        <div className="meta">
                            <a>Friends</a>
                        </div>
                        <div className="description">
                        {this.props.data.text}
                        </div>
                    </div>
                    {this.props.data.type}
                    <p>{this.props.data.description}</p>
                </div>

            </div>



        )
    }
}
