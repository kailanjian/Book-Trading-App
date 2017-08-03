import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Books } from './books.js';

Meteor.methods({
  'books.add'(userId, bookInfo) {
    check(userId, String);
    check(bookInfo, Object);

    Books.insert({
      owner: userId,
      bookInfo: bookInfo,
      tradeRequest: "none",
      isTradeApproved: false
    });
  },
  'books.remove'(bookId) {
    check(bookId, String);

    Books.remove(bookId);
  },
  'books.requestTrade'(requester, bookId) {
    check(requester, String);
    check(bookId, String);

    Books.update(bookId, {$set: {tradeRequest: requester}});
  },
  'books.cancelTrade'(bookId) {
    // maybe do some verification we are canceling for the correct user
    check(bookId, String);

    Books.update(bookId, {$set: {tradeRequest: "none"}});
  },
  'books.approveTrade'(bookId) {
    check(bookId, String);

    Books.update(bookId, {$set: {isTradeApproved: true}});
  },
  'books.rejectTrade'(bookId) {
    check(bookId, String);

    Books.update(bookId, {$set: {tradeRequest: "none"}});
  },
});