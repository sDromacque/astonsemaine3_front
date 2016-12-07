'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('UserCtrl', function ($http, $scope) {
    $http.get('http://localhost:1337/user?skip=10&limit=5')
      .then(function (res) {
        $scope.users = res.data;
      });
  })
  .controller('getUserCtrl', function ($http, $scope, $routeParams) {
    let id = $routeParams.id;
    $http.get('http://localhost:1337/user/'+id)
      .then(function (res) {
        $scope.user = res.data;
      })
  });
