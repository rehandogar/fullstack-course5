(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ["SignUpService"];
  function SignUpController(SignUpService) {
    var $ctrl = this;
    $ctrl.checkSignUp = function () {
      (function () {
        var promise = SignUpService.getShortName();
        promise.then(function (result) {
          result.data.menu_items.forEach(function matchItems(currentValue) {
              if (currentValue.short_name === $ctrl.menuNumber) {
                SignUpService.setSignUp($ctrl.firstName,$ctrl.lastName,$ctrl.email,$ctrl.phoneNumber,currentValue);
              } else {

              }
            });
        })
        .catch(function (error) {
          console.log(error);
        })
      }());
    }
  }
}());
