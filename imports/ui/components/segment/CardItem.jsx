import React, { Component } from "react";
// import { createContainer } from 'meteor/react-meteor-data';

export default class CardItem extends Component {


    render() {
        console.log(this.props.user);
        return (
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src="/images/mathew.png"></img>
    </div>
                        <div className="content">
                            <div className="header">Matt Giampietro</div>
                            <div className="meta">
                                <a>Friends</a>
                            </div>
                            <div className="description">
                                Matthew is an interior designer living in New York.
      </div>
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

                </div>


        )
    }
}

// export default createContainer((props) => {

//     return {

//         user: Meteor.user(),
//     };
// }, Header);


























