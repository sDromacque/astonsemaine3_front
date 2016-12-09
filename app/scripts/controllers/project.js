'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('ProjectByTagCtrl', function ($scope, $http, $routeParams) {
    let tag = $routeParams.tag;
    $http.get('http://localhost:1337/project?tag=' + tag)
      .then(function (res) {
        $scope.projectByTag = res.data;
      })
  })
  .controller('getTagsCtrl', function ($http, $scope) {
    $http.get('http://localhost:1337/api/project/tags')
      .then(function (res) {
        $scope.tags = res.data;
      })
  });
