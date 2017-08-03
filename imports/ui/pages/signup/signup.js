import './signup.html';
import '/imports/api/accounts/accounts.js';

Template.signup.events({
  "submit .form-signup"(event, template) {
    event.preventDefault();

    let username = template.find(".input-username").value;

    Accounts.createUser({
      username: username,
      password: template.find(".input-password").value
    }, function(error) {
      if (error) {
        console.log("SIGNUP ERROR");
        // SIGNUP ERROR
      } else {
        Meteor.call("accounts.new", username)
        FlowRouter.go("App.home");
      }
    });
  }
});