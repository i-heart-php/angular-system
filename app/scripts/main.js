require.config({
  baseUrl: 'scripts/',

  // alias libraries paths.  Must set 'angular'
  paths: {
    'angular': 'ext/angular',
    'angular-route': 'ext/angular-route',
    'angular-ui-router': 'ext/angular-ui-router',
    'angularAMD': 'ext/angularAMD',
    'ngload': 'ext/ngload',
    'angular-resource': 'ext/angular-resource',
    'ui-bootstrap': 'ext/ui-bootstrap',
    'ui-bootstrap-tpls': 'ext/ui-bootstrap-tpls',
    'jquery': 'ext/jquery',
    'bootstrap': 'ext/bootstrap'
  },

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'angular-route': [ 'angular' ],
    'angularAMD': [ 'angular' ],
    'ngload': [ 'angularAMD' ],
    'angular-resource': [ 'angular' ],
    'angular-ui-router': [ 'angular' ],
    'ui-bootstrap': [ 'angular' ],
    'ui-bootstrap-tpls': [ 'angular', 'ui-bootstrap'],
    'bootstrap': ['jquery']
  },

  // kick start application
  deps: ['app']
});
