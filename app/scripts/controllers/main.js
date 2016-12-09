'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('MainCtrl', function ($http) {
    $http.get('http://localhost/1337/project/tags')
      .then(function (res) {
        $scope.tags = res.data;
      })
  });
