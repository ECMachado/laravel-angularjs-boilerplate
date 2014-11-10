'use strict';

angular.module('laravelAngularBoilerplateApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $http, $sanitize, $timeout, $location, $auth) {
    $scope.credentials = {
    	email: '',
    	password: ''
    };

    $scope.isDisabled = false;

    $scope.flash = '';


    var sanitizeCredentials = function () {
    	return {
            url: $rootScope.apiUrl+'/auth/login',
    		email: $sanitize($scope.credentials.email),
    		password: $sanitize($scope.credentials.password)
    	}
    };

    $scope.submit = function () {
        $scope.flash = '';
    	$scope.isDisabled = true;
    	$auth.login(sanitizeCredentials());
    };
  });
