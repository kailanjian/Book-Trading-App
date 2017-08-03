import { Meteor } from 'meteor/meteor';
import './nav.html';


Template.nav.helpers({
});

Template.nav.events({
  "click #link-logout"(event, template) {
    event.preventDefault();

    Meteor.logout(function(error){
      if (error) {
        // TODO error
        console.log("LOGOUT ERROR");
      } else {
        FlowRouter.go('App.home');
      }
    });
  }
})
/*
Template.nav.onCreated(function () {
  // nav created
});

Template.nav.helpers({
});

Template.nav.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('links.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
*/