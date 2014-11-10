'use strict';

angular.module('laravelAngularBoilerplateApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'satellizer'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope, $http) {

    // Constants
    $rootScope.apiUrl = 'http://localhost:8000';
    //$rootScope.apiUrl = '';
  });
