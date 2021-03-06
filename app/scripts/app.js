'use strict';

angular.module('hackfeedApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
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
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl'
      })
      .otherwise({
        redirectTo: '/feed'
      });
  })
  .run(function () {
    filepicker.setKey('Ak7NhBcYQjaVUInY0IraQz');
  });
