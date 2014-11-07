'use strict';

angular.module('laravelAngularBoilerplateApp')
  .factory('AuthenticationService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
