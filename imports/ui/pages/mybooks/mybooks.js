import { Books } from '/imports/api/books/books.js';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';

import '/imports/ui/components/book/book.js';
import '/imports/ui/components/trade/trade.js';

import './mybooks.html';

let bookList = new ReactiveVar()

Template.mybooks.onCreated(function() {
  if (!Meteor.user()) {
    FlowRouter.go('App.notFound');
  }
  Meteor.subscribe('books.all');
});

Template.mybooks.helpers({
  books() {
    return bookList.get();
  },
  myBooks() {
    return Books.find({owner: Meteor.userId()});
  }
})

Template.mybooks.events({
  "submit .form-add-book"(event, template) {
    event.preventDefault();

    const book = template.find(".input-add-book").value;

    Meteor.call("server.getbooks", book, 5, function(err, res) {
      if (err) {
        console.log("ERROR");
        // TODO: handle error
      } else {
        bookList.set(res);
      }
    });

    template.find(".form-add-book").reset();
  },
  "click .img-result"(event, template) {
    event.preventDefault();

    const index = event.target.attributes["index"].value;

    const book = bookList.get()[index];

    Meteor.call("books.add", Meteor.userId(), book);

    bookList.set([]);
  },
});