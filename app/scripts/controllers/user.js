'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('UserCtrl', function ($http) {
    $http.get('http://localhost:1337/user?skip=5&limit=2')
      .then(function (res) {
        var users = res.data;
        console.log(users);
      });
  });
