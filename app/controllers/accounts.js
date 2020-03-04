'use strict';

const Accounts = {
  index: {
    handler: function(request, h) {
      return h.view('main', { title: 'Pharmacy POI' });
    }
  },
  showSignup: {
    handler: function(request, h) {
      return h.view('signup', { title: 'Register for Pharmacy POI' });
    }
  },
  signup: {
    handler: function(request, h) {
      return h.redirect('/home');
    }
  },
  showLogin: {
    handler: function(request, h) {
      return h.view('login', { title: 'Login to Pharmacy POI' });
    }
  },
  login: {
    handler: function(request, h) {
      return h.redirect('/home');
    }
  },
  logout: {
    handler: function(request, h) {
      return h.redirect('/');
    }
  }
};

module.exports = Accounts;
