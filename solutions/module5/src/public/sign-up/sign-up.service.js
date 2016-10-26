(function () {
  "use strict";

  angular.module('public')
  .service('SignUpService', SignUpService)
  .constant("DOMAIN", 'https://angularjs-course.herokuapp.com/');

  SignUpService.$inject = ["$http"];
  function SignUpService($http) {
    var $service = this;
    $service.getShortName = function () {
      var response = $http({
          method: 'GET',
          url: ("DOMAIN" + 'menu_items.json')
      });
      return response;
    }
  }
}());
