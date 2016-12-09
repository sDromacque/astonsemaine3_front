'use strict';

/**
 * @ngdoc overview
 * @name frontApp
 * @description
 * # frontApp
 *
 * Main module of the application.
 */
angular
  .module('frontApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'getTagsCtrl',
        controllerAs: 'project'
      })
      .when('/users',  {
        templateUrl: 'views/user/users.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/user/:id',  {
        templateUrl: 'views/user/user.html',
        controller: 'getUserCtrl',
        controllerAs: 'user'
      })
      .when('/project/:tag', {
        templateUrl: 'views/project/projectByTag.html',
        controller: 'ProjectByTagCtrl',
        conrtoller: 'project'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
