'use strict';

angular.module('laravelAngularBoilerplateApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $http, $sanitize, $timeout) {
    $scope.credentials = {
    	email: '',
    	password: ''
    };

    $scope.isDisabled = false;


    var sanitizeCredentials = function () {
    	return {
    		email: $sanitize($scope.credentials.email),
    		password: $sanitize($scope.credentials.password)
    	}
    };

    $scope.submit = function () {
    	$scope.isDisabled = true;
    	$http.post($rootScope.apiUrl+'/api/authentication/login', sanitizeCredentials())
    		.success(function (data) {
    			console.log(data);
				$scope.isDisabled = false;
    			$scope.credentials = {
			    	email: '',
			    	password: ''
			    };
    		})
    		.error(function (data) {
    			console.log(data);
    			$scope.isDisabled = false;
    		});
    };
  });
