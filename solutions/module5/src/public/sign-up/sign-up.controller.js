(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ["SignUpService"];
  function SignUpController(SignUpService) {
    var $ctrl = this;
    $ctrl.checkShortName = function (menuNumber) {
      var promise = SignUpService.getShortName();
      promise.then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }
}());
