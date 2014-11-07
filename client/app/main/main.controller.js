'use strict';

angular.module('laravelAngularBoilerplateApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope) {
    $scope.awesomeThings = [];
	$http.get($rootScope.apiUrl + '/api/things').success(function(awesomeThings) {
		$scope.awesomeThings = awesomeThings;
		console.log(awesomeThings);
	});

  });
