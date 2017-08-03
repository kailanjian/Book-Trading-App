import { Mongo } from 'meteor/mongo';

export const Books = new Mongo.Collection('books');

/*
Structure of the Books collection:
each document contains the following properties:
- owner: user id of owner of book
- bookInfo: data about book (from api)
- tradeRequest: user id of trade request
- isTradeApproved: did you approve the trade?
*/