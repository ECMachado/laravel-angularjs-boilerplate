'use strict';

angular.module('laravelAngularBoilerplateApp')
  .controller('NavbarCtrl', function ($scope, $location, $auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.auth = $auth;

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });