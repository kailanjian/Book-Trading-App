import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'server.getbooks'(query, numResults) {
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + query;

    var httpGetSync = Meteor.wrapAsync(Meteor.http.get);
    var res = httpGetSync(url);
    return JSON.parse(res.content).items.slice(0, numResults);
  }
});