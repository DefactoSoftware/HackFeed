'use strict';

angular.module('hackfeedApp')

  .controller('FeedCtrl', ['$scope', '$firebase', function ($scope, $firebase) {

    var commentsRef = new Firebase("https://wellfed.firebaseio.com/comments");
    $scope.posts = $firebase(commentsRef);

    $scope.addPost = function() {
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

    $scope.enterComment = function(e) {
      if (e.keyCode != 13) return;
      //TODO: addComment();
    }

    $scope.addComment = function(postId) {
      if ($scope['comment-'+postId]) {

        var postRef = new Firebase("https://wellfed.firebaseio.com/comments/"+postId+"/comments");
        var comments = $firebase(postRef);

        comments.$add({
          "body": $scope.comment,
          "uid": $scope.currentUser.id,
          "authorName": $scope.currentUser.displayName,
          "createdAt": new Date()
        });
        $scope['comment-'+postId] = "";
      }
    };


   }
  ]);
