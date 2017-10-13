import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {PopularSearches} from '../PopularSearches.js';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('popularSearchess', function () {
    return PopularSearches.find({});
  });

}
