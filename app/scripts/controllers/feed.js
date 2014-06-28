'use strict';

angular.module('hackfeedApp')
  .controller('FeedCtrl', ['$scope', function ($scope) {
    $scope.mockObject = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
