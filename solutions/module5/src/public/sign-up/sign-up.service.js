(function () {
  "use strict";

  angular.module('public')
  .service('SignUpService', SignUpService);

  SignUpService.$inject = ["$http"];
  function SignUpService($http) {
    var $service = this;
    $service.getShortName = function () {
      var response = $http({
          method: 'GET',
          url: ('')
      });
      return response;
    }
  }
}());
