import './login.html';

Template.login.onCreated(function() {
  if (!Meteor.user()) {
    FlowRouter.go('App.notFound');
  }
});

Template.login.events({
  "submit .form-login"(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      template.find(".input-username").value,
      template.find(".input-password").value,
      function(error) {
        if (error) {
          // TODO: proper login error
          console.log("ERROR LOGGING IN");
          window.alert("Error logging in, please try again");
        } else {
          FlowRouter.go('App.home');
        }
      }
    )
  }

})