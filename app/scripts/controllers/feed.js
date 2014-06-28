'use strict';

angular.module('hackfeedApp')
  .controller('FeedCtrl', ['$scope', '$firebase',
    function ($scope, $firebase) {

    var commentsRef = new Firebase("https://wellfed.firebaseio.com/comments");
    $scope.posts = $firebase(commentsRef);

      $scope.addComment = function () {
        if ($scope.body) {
          var keys = $scope.comments.$getIndex();

          $scope.comments.$add({
            "body": $scope.body,
            "uid": $scope.currentUser.id,
            "authorName": $scope.currentUser.displayName,
            "createdAt": new Date(),
            $priority: -keys.length

          });
          $scope.body = "";
        }

      };
    }
  ]);
