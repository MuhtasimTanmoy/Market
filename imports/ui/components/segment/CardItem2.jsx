import React, { Component } from "react";

export default class CardItem extends Component {


    render() {
        return (
          
                <div className="card">
                    <div className="image">
                        <img src="/images/mathew.png">
                        </img>
                    </div>
                    <div className="content">
                        <div className="header">Matt Giampietro</div>
                        <div className="meta">
                            <a>Friends</a>
                        </div>
                        <div className="description">
Hello      </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            Joined in 2013
      </span>
                        <span>
                            <i className="user icon"></i>
                            75 Friends
      </span>
                    </div>
                </div>





        )
    }
}


























