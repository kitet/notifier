/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'notifier',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase: {
      apiKey: "AIzaSyCAB2tqyz9xn4qE1j4arpyUzPyLNCT9psg",
      authDomain: "notifier-7395b.firebaseapp.com",
      databaseURL: "https://notifier-7395b.firebaseio.com",
      projectId: "notifier-7395b",
      storageBucket: "notifier-7395b.appspot.com",
      messagingSenderId: "247515663230"
    },

    torii: { sessionServiceName: 'session' },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

//     ENV['simple-auth'] = {
//   authorizer: 'simple-auth-authorizer:token'
// };

// ENV['simple-auth-token'] = {
//   serverTokenEndpoint: '/api-token-auth/',
//   identificationField: 'username',
//   passwordField: 'password',
//   tokenPropertyName: 'token',
//   authorizationPrefix: 'Bearer ',
//   authorizationHeaderName: 'Authorization',
//   headers: {},
// };
  }

  if (environment === 'production') {

  }

  return ENV;
};
