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

                    {/* <div className="ui medium image" style={{ minHeight: "180px" }}>
                        <img src="./images/mathew.png" />

                    </div> */}

                    <div className="content">
                        <div className="header">Matt Giampietro</div>
                        <div className="meta">
                            <a>Friends</a>
                        </div>
                        <div className="description">
                            Tnamoy
                        </div>
                    </div>
                    ffff                    <p>czxczxc</p>
                </div>

            </div>



        )
    }
}
