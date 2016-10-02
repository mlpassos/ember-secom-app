/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'embeter-materialize',
    environment: environment,
    baseURL: '/',
    defaultLocationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    cordova: {
      rebuildOnChange: true,
      emulate: false,
      emulateTarget: {
        ios: "iPad-2",
        android: "android-20"
      },

      // Which platform to build and/or emulate
      //
      // default: 'ios'
      platform: 'android',

      // Which URL the ember server is running on. This is used when using
      // live-reload that comes with the starter kit.
      //
      // default: 'the-device-ip:4200'
      emberUrl: 'http://192.168.0.18:4200',

      // Whether or not to use liveReload on the device simulator. Requires a few
      // plugins to be installed that come with the starter-kit. It will cause your
      // app to not boot up in the browser
      //
      // default: false and iOS
      liveReload: {
        enabled: false,
        platform: 'android'
      }
    },
    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false,
      }
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' maps.gstatic.com",
    'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
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
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};