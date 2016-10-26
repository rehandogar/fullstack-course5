(function () {
  "use strict";

  angular.module('public')
  .controller('profileController', profileController);

  profileController.$inject = ["SignUpService"];
  function profileController(SignUpService) {
    var $ctrl = this;
    $ctrl.isSignedUp = true;
    $ctrl.signUpData = {};
    $ctrl.getSignUp = function () {
        $ctrl.signUpData = SignUpService.getSignUp();
        if($ctrl.signUpData) {
          $ctrl.isSignedUp = false;
        }
    }
  }
}())
