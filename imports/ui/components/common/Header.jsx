import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';
//import {createContainer} from 'meteor/react-meteor-data';

import Login from '/imports/ui/components/auth/Login.jsx';
import { FlowRouter } from 'meteor/kadira:flow-router';



class Header extends Component {

	componentDidMount() {
		$('.ui.basic.button')
			.popup({
				inline: true
			})
			;
		$('.ui.label')
			.popup({
				inline: true
			})
			;

		$('.ui.dropdown')
			.dropdown()
			;
	}
	constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          title: 'Andorra'
        }, {
          title: 'United Arab Emirates'
        }, {
          title: 'Afghanistan'
        }, {
          title: 'Antigua'
        }, {
          title: 'Anguilla'
        }, {
          title: 'Albania'
        }, {
          title: 'Armenia'
        }, {
          title: 'Netherlands Antilles'
        }, {
          title: 'Angola'
        }, {
          title: 'Argentina'
        }, {
          title: 'American Samoa'
        }, {
          title: 'Austria'
        }, {
          title: 'Australia'
        }, {
          title: 'Aruba'
        }, {
          title: 'Aland Islands'
        }, {
          title: 'Azerbaijan'
        }, {
          title: 'Bosnia'
        }, {
          title: 'Barbados'
        }, {
          title: 'Bangladesh'
        }, {
          title: 'Belgium'
        }, {
          title: 'Burkina Faso'
        }, {
          title: 'Bulgaria'
        }, {
          title: 'Bahrain'
        }, {
          title: 'Burundi'
        }
      ]
    }

  }

  componentDidMount() {

    $('.ui.search').search({source: this.state.content});
  }
	logOut() {
		Meteor.logout(function () {
			FlowRouter.go('/');
		});


		$("#goHome").click();

	}
	renderLogin() {
		$('.ui.page.dimmer')
			.dimmer('show');

	}




	loggedInDiv() {


		let loggedIn = <a className="ui simple dropdown item">
			<i className="user icon"></i> {this.props.user.username} <i className="dropdown icon"></i>
			<div className="menu">
				<a className="item" href="/profile">My profile</a>
				<a className="item">Feedback</a>
				<a className="item" onClick={this.logOut}>Log out</a>
			</div>
		</a>;
		return loggedIn;
	}


	notLoggedInDiv() {
		let notLoggedIn = <a className="item" onClick={this.renderLogin}><h3>Login</h3></a>
		return notLoggedIn;

	}
	render() {


		return (

			<div className="ui white large top fixed menu">

				<div className="ui page dimmer">
					<div className="content">
						<div className="center">
							<Login />
						</div>
					</div>
				</div>



				<a href="/" className="item"><h2>Market</h2></a>

				<div className="item">
					<div className="ui search" style={{width:"800px",padding:"0px",margin:"0px"}}>
						<div className="ui icon fluid input">
							<input className="prompt" type="text" placeholder="Search products..." ></input>
							<i className="search icon"></i>
						</div>
						<div className="results"></div>
					</div></div>
				<div className="right menu">


					<a className="item" href="/help"><h3>Cart</h3></a>

					<a className="item" href="/help"><h3>Wish List</h3></a>


					{this.props.user ? this.loggedInDiv() : this.notLoggedInDiv()}


					<span className="item"></span>
				</div>
			</div>
		)
	}
}

// export default createContainer(  (props) => {

//     return{

//         user: Meteor.user(),
//     };
// }, Header);


export default withTracker(props => {
	// Do all your reactive data access in this method.
	// Note that this subscription will get cleaned up when your component is unmounted
	// const handle = Meteor.subscribe('todoList', props.id);

	return {
		user: Meteor.user(),
		// listLoading: !handle.ready(),
		// tasks: Tasks.find({ listId: props.id }).fetch(),
	};
})(Header);
