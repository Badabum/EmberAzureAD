/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'azure-auth',
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
  }

  if (environment === 'production') {

  }
  ENV.authConfigs = {
    tenant:'ihorkorotenkogmail.onmicrosoft.com',
    clientId:'b821c788-c2dd-4665-bb59-a5f90d678844',
    postLogoutRedirectUri:'http://localhost:4200/',
    redirectUri:'http://localhost:4200/',
    cacheLocation:'localStorage',
    navigateToLoginRequestUrl:false,
    instance:''
  }
  ENV['ember-simple-auth'] = {
    routeAfterAuthentication:'users',
    authorizer:'authorizer:azure',
    crossOriginWhiteList:['*']
  }
  return ENV;
};
