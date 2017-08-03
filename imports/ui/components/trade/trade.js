import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Books } from '/imports/api/books/books.js';

import './trade.html';

const NONE = 0;
const BY_USER = 1;
const FOR_USER = 2;

let mode = new ReactiveVar(0);

Template.trade.onCreated(function () {
  Meteor.subscribe('books.all');
});

Template.trade.helpers({
  showByUser() {
    return mode.get() == 1;
  },
  showForUser() {
    return mode.get() == 2;
  },
  requestsForUser() {
    return Books.find({
      tradeRequest: {$ne: "none"}, 
      owner: Meteor.userId()
    });
  },
  requestsByUser() {
    return Books.find({tradeRequest: Meteor.userId()});
  }
});

Template.trade.events({
  "click .button-by-user"(event, template) {
    if (mode.get() == BY_USER) {
      mode.set(NONE);
    } else {
      mode.set(BY_USER);
    }

  },
  "click .button-for-user"(event, template) {
    if (mode.get() == FOR_USER) {
      mode.set(NONE);
    } else {
      mode.set(FOR_USER);
    }

  },
  "click .button-cancel-request"(event, template) {
    Meteor.call("books.cancelTrade", this._id);
  },
  "click .button-accept-request"(event, template) {
    Meteor.call("books.approveTrade", this._id);
  },
  "click .button-reject-request"(event, template) {
    Meteor.call("books.rejectTrade", this._id);
  }
});