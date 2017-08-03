import { Meteor } from 'meteor/meteor';
import { Books } from '/imports/api/books/books.js';

import '/imports/ui/components/book/book.js';
import '/imports/ui/components/trade/trade.js';

import './allbooks.html';

Template.allbooks.onCreated(function() {
  Meteor.subscribe('books.all');
  if (!Meteor.user()) {
    FlowRouter.go('App.notFound');
  }
});

Template.allbooks.helpers({
  allBooks() {
    return Books.find({});
  }
});