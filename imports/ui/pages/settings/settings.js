import { UserAccounts } from '/imports/api/accounts/accounts.js';
import { Meteor } from 'meteor/meteor';

import './settings.html';


Template.settings.onCreated(function () {
  Meteor.subscribe('accounts.all');
  if (!Meteor.user()) {
    FlowRouter.go('App.notFound');
  }
});

Template.settings.helpers({
  profile() {
    if (Meteor.user()) {
      console.log(UserAccounts.findOne({username: Meteor.user().username}));
      return UserAccounts.findOne({username: Meteor.user().username}).profile;
    }
    else {
      return "Error";
    }
  },
});

Template.settings.events({
  "submit .form-settings"(event, template) {
    event.preventDefault();

    let currProfile = UserAccounts.findOne({username: Meteor.user().username}).profile;

    let name = template.find(".input-name").value || currProfile.name;
    let city = template.find(".input-city").value || currProfile.city;
    let state = template.find(".input-state").value || currProfile.state;

    let profile = {
      name: name,
      city: city,
      state: state
    }


    // TODO: success or fail messages
    console.log("Updating user [" + Meteor.user().username + "] with profile " + JSON.stringify(profile));
    if (Meteor.user()) {
      Meteor.call("accounts.update", Meteor.userId(), profile);
    } else {
      throw new Meteor.Error("not-logged-in", "settings page updated without account!");
    }    

    template.find(".form-settings").reset();
  },
  "submit .form-change-password"(event, template) {
    event.preventDefault();

    let oldPassword = template.find(".input-old-password").value;
    let newPassword = template.find(".input-new-password").value;

    // TODO: success or fail messages
    Accounts.changePassword(oldPassword, newPassword, 
      function(error) {
        // success or error here
        if (error) {
          window.alert("Error, please try again");
        } else {
          window.alert("Successfully changed password");
        }
      });

    template.find(".form-change-password").reset();
  }
});