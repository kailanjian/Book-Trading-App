import { Meteor } from 'meteor/meteor';
import { UserAccounts } from '../accounts.js';

Meteor.publish('accounts.all', function () {
  return UserAccounts.find();
});
