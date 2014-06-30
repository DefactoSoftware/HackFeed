'use strict';

angular.module('hackfeedApp')

.controller('FeedCtrl', ['$scope', '$rootScope', '$firebase', '$animate',
  function ($scope, $rootScope, $firebase, $animate) {

    var postsRef = new Firebase("https://wellfed.firebaseio.com/posts");
    $scope.posts = $firebase(postsRef);
    $scope.comments = [];

    $scope.addPost = function () {
      if ($scope.body) {
        var keys = $scope.posts.$getIndex();

        $scope.posts.$add({
          "body": $scope.body,
          "uid": $scope.currentUser.id,
          "authorName": $scope.currentUser.displayName,
          "createdAt": new Date(),
          $priority: -keys.length,
          "type": "user-post"
        });
        $scope.body = "";
      }
    };

    $scope.enterComment = function (e, postId) {
      if (e.keyCode != 13) return;

      $scope.addComment(postId);
    }

    $scope.filePick = function (e, postId) {
      filepicker.pick(function (file) {
        $scope.addUpload(postId, file.filename, file.url);
      });
    }

    $scope.addComment = function (postId) {
      if ($scope.comments[postId]) {

        var commentsRef = new Firebase("https://wellfed.firebaseio.com/posts/" + postId + "/comments");
        var comments = $firebase(commentsRef);

        comments.$add({
          "body": $scope.comments[postId],
          "uid": $scope.currentUser.id,
          "authorName": $scope.currentUser.displayName,
          "createdAt": new Date(),
          "type": "user-post"
        });
        $scope.comments[postId] = "";
      }
    };

    $scope.addUpload = function (postId, body, url) {
        var commentsRef = new Firebase("https://wellfed.firebaseio.com/posts/" + postId + "/comments");
        var comments = $firebase(commentsRef);

        comments.$add({
          "body": body,
          "uid": $scope.currentUser.id,
          "authorName": $scope.currentUser.displayName,
          "createdAt": new Date(),
          "url": url
        });
    };
  }
]);
