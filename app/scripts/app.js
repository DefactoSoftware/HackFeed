'use strict';

angular.module('hackfeedApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/feed', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/feed.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
