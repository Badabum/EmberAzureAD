/* jshint node: true */
// let aadConfig = {
//   tenant: 'e15b7c26-22f7-4733-b359-e9c8823e8108', 
//   clientId: 'f331de18-121b-49a1-a676-c911a62f0489',
//   postLogoutRedirectUri:'http://localhost:4200',
//   cacheLocation:'localStorage'
// }

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
  ENV['torii'] = {
    providers:{
      'azure-oauth2':{
        apiKey:'f331de18-121b-49a1-a676-c911a62f0489',
        state:12345,
        redirectUri:'https://localhost:44306',
        baseUrl:'https://login.microsoftonline.com/e15b7c26-22f7-4733-b359-e9c8823e8108/oauth2/authorize'
      }
    }
  }
  return ENV;
};
