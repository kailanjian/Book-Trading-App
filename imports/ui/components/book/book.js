import { Meteor } from 'meteor/meteor'

import './book.html';


Template.book.onCreated(function () {
});

Template.book.helpers({
  ownedByUser() {
    return (this.owner != Meteor.userId());
  },
  isRequestable() {
    return (this.tradeRequest == "none");
  }
});

Template.book.events({
  "click .button-delete-book"(event, template) {
    Meteor.call("books.remove", this._id);
  },
  "click .button-request-book"(event, template) {
    console.log(this);
    Meteor.call("books.requestTrade", Meteor.userId(), this._id);
  }
});