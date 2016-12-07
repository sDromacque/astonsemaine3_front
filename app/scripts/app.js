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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
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
      .otherwise({
        redirectTo: '/'
      });
  });
