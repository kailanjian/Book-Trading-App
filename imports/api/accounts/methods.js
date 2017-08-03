import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { UserAccounts } from './accounts.js';

Meteor.methods({
  'accounts.new'(username) {
    check(username, String);

    UserAccounts.insert({
      username: username,
      profile: {}
    });
  },
  'accounts.update'(userId, profile) {
    check(userId, String);
    check(profile, Object);

    console.log("account update");

    UserAccounts.update({userId}, {$set: {profile: profile}});
  },
});