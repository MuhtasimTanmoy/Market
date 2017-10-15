import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import HomePage from '/imports/ui/pages/HomePage.jsx'
import RegisterPage from '/imports/ui/pages/RegisterPage'
import LoginPage from '/imports/ui/pages/LoginPage'
import TestPage from '/imports/ui/pages/TestPage.jsx'



FlowRouter.route('/', {
  name: 'Homepage' ,
  action(params, queryParams) {
      console.log("home route is being called...");
      Meteor.userId() ? mount(HomePage) : mount(LoginPage);
  }
});


FlowRouter.route('/test', {
  name: 'Test' ,
  action(params, queryParams) {
      console.log("test route is being called...");
      mount(TestPage);
  }
});


FlowRouter.route('/register', {
  name: 'RegisterPage',
  action(params, queryParams) {
      console.log("home route is being called...");
      // Meteor.userId() ? mount(Dashboard) : mount(Login);
      mount(RegisterPage);
  }
});

FlowRouter.route('/login', {
  name: 'LoginPage',
  action(params, queryParams) {
      console.log("home route is being called...");
      // Meteor.userId() ? mount(Dashboard) : mount(Login);
      mount(LoginPage);
  }
});
