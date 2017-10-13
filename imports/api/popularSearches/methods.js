import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {PopularSearches} from './PopularSearches.js';
import controller from './controller';


Meteor.methods({

    'popularSearches.insert'( data ){
        console.log("Here i am")
        //pass data to this method as:  {patientId, reportId, dataEntryId}
        // if (!this.userId) {
        //     throw new Meteor.Error('not-authorized');
        // }
        console.log(data);

        let usr = Meteor.user();
        let ret = controller.insert(data);


        return {
          statusCode: 1,
          statusId: ret,
        }

    }






  });
