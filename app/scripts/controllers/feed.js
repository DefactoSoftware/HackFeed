'use strict';

angular.module('hackfeedApp')
  .controller('FeedCtrl', ['$scope', '$rootScope', '$firebase', function ($scope, $rootScope, $firebase) {
    $scope.mockObject = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var commentsRef = new Firebase("https://wellfed.firebaseio.com/comments");
    $scope.comments = $firebase(commentsRef);

    $scope.addComment = function() {
      if ($scope.body) {
        $scope.comments.$add({
          "body": $scope.body,
          "uid": $scope.currentUser.id,
          "authorName": $scope.currentUser.displayName,
          "createdAt": new Date()
        });
        $scope.body = "";
      }
    }

  }]);
