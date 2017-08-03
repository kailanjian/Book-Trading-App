import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/signup/signup.js';
import '../../ui/pages/settings/settings.js';
import '../../ui/pages/allbooks/allbooks.js';
import '../../ui/pages/mybooks/mybooks.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/signup', {
  name: 'App.signup',
  action() {
    BlazeLayout.render('App_body', {main: 'signup'});
  }
});

FlowRouter.route('/login', {
  name: 'App.login',
  action() {
    BlazeLayout.render('App_body', {main: 'login'});
  }
});

FlowRouter.route('/settings', {
  name: 'App.settings',
  action() {
    BlazeLayout.render('App_body', {main: 'settings'});
  }
})

FlowRouter.route('/allbooks', {
  name: 'App.allbooks',
  action() {
    BlazeLayout.render('App_body', {main: 'allbooks'});
  }
})

FlowRouter.route('/mybooks', {
  name: 'App.mybooks',
  action() {
    BlazeLayout.render('App_body', {main: 'mybooks'});
  }
})

FlowRouter.notFound = {
  name: 'App.notFound',
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
