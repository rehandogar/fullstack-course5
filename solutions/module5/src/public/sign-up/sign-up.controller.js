(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ["SignUpService"];
  function SignUpController(SignUpService) {
    var $ctrl = this;
    $ctrl.isSignedUp = false; // set this flag in service to share it with profile ctrl!!
  }
}());
