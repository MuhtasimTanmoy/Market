import {PopularSearches} from './PopularSearches.js';
class PopularSearchesController {

    insert(data){

        let usr = Meteor.user();

        // let usr = Meteor.user();
        let ret = PopularSearches.insert({
            text: data.text,
        });
        return ret;
    }
}

export default new PopularSearchesController();
