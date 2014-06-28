'use strict';

angular.module('hackfeedApp')

.controller('FeedCtrl', ['$scope', '$firebase',
  function ($scope, $firebase) {

    var postsRef = new Firebase("https://wellfed.firebaseio.com/posts");
    $scope.posts = $firebase(postsRef);

    $scope.addPost = function () {
      if ($scope.body) {
        var keys = $scope.posts.$getIndex();

        $scope.posts.$add({
          "body": $scope.body,
          "uid": $scope.currentUser.id,
          "authorName": $scope.currentUser.displayName,
          "createdAt": new Date(),
          $priority: -keys.length
        });
        $scope.body = "";
      }
    };

    $scope.enterComment = function (e) {
      if (e.keyCode != 13) return;
      //TODO: addComment();
    }

    $scope.addComment = function (e) {
      if (e.srcElement[0].value) {

        var commentsRef = new Firebase("https://wellfed.firebaseio.com/posts/" + e.srcElement[1].value + "/comments");
        var comments = $firebase(commentsRef);

        comments.$add({
          "body": e.srcElement[0].value,
          "uid": $scope.currentUser.id,
          "authorName": $scope.currentUser.displayName,
          "createdAt": new Date()
        });
        $scope.comment = "";
      }
    };


  }
]);
