'use strict';

angular.module('laravelAngularBoilerplateApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

	$http.get('http://localhost:8000/api/things').success(function(awesomeThings) {
		$scope.awesomeThings = awesomeThings;
	});

  });
