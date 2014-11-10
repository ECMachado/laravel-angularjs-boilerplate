'use strict';

angular.module('laravelAngularBoilerplateApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope, $auth) {
    $scope.awesomeThings = [];
	$http.get(apiUrl + '/api/things').success(function(awesomeThings) {
		$scope.awesomeThings = awesomeThings;
		console.log(awesomeThings[0]);
	});

	console.log($auth.isAuthenticated());
  });
