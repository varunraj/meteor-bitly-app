import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url'
import { check, Match } from 'meteor/check'

// meteor methods to update links collection

Meteor.methods({
    'links.insert': function (url) {  // methods to be executed when inserting a link. We can call links.insert and this method will be executed
        //console.log('attempting to save url', url)
        //validUrl.isUri(url)
        check(url, Match.Where(url => validUrl.isUri(url)))// Match is used to find it is a valid url.


    }
})


export const Links = new Mongo.Collection('links');
