(function () {
  "use strict";

  angular.module('public')
  .service('SignUpService', SignUpService);

  SignUpService.$inject = ["$http"];
  function SignUpService($http) {
    var $service = this;
    $service.signUpData = {};
    $service.getShortName = function () {
      var response = $http({
          method: 'GET',
          url: ('https://angularjs-course.herokuapp.com/menu_items.json')
      });
      return response;
    }
    // SignUp setters
    $service.setSignUp = function (firstName,lastName,email,phoneNumber,currentValue) {
      $service.signUpData.firstName = firstName;
      $service.signUpData.lastName = lastName;
      $service.signUpData.email = email;
      $service.signUpData.phoneNumber = phoneNumber;
      $service.signUpData.currentValue = currentValue;
    }
    // SignUp getters;
    $service.getSignUp = function () {
      return $service.signUpData;
    }
  }
}());
