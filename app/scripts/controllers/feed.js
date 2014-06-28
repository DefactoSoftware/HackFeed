'use strict';

angular.module('hackfeedApp')
  .controller('FeedCtrl', ['$scope', '$firebase', function ($scope, $firebase) {
    $scope.mockObject = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var commentsRef = new Firebase("https://wellfed.firebaseio.com/comments");
    $scope.people = $firebase(commentsRef);

  }]);
