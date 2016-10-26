(function () {
  "use strict";

  angular.module('public')
  .directive('validateMenuItem', validateMenuItem);

  validateMenuItem.$inject = ["SignUpService"];
  function validateMenuItem(SignUpService) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {

        ctrl.$asyncValidators.shortname = function(modelValue, viewValue) {

          if (ctrl.$isEmpty(modelValue)) {
            // consider empty model valid
            return false;
          }

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

          return promise

        };
      }
    };
  }

}());
