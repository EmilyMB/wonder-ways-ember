/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'wonder-ways-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
     ENV.API_NAMESPACE = 'v1';

     ENV.contentSecurityPolicy = {
       'connect-src': "'self' *",
       'script-src': "'self' *",
       'font-src': "'self' *",
       'img-src': "'self' *",
       'style-src': "'self' *",
       'media-src': "'self' *"
     }
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.API_NAMESPACE = 'api/v1';
  }

  return ENV;
};
