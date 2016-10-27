(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'InfoService'];
function SignUpController(MenuService, InfoService) {
  var $ctrl = this;
  $ctrl.dishNotFound = false;
  $ctrl.saved = false;

  $ctrl.checkFavoriteDish = function() {
    if (!$ctrl.favoriteDish || $ctrl.favoriteDish === '' ) {
      $ctrl.dishNotFound = true;
      return;
    }

    return MenuService.getMenuItem($ctrl.favoriteDish.toUpperCase())
    .then(function (response) {
      $ctrl.favoriteMenuItem = response;
      $ctrl.dishNotFound = false;
    })
    .catch(function() {
      $ctrl.dishNotFound = true;
    });
  };

  $ctrl.submit = function() {
    $ctrl.checkFavoriteDish().then(function() {
      InfoService.saveInfo($ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phoneNumber, $ctrl.favoriteMenuItem);
      $ctrl.saved = true;
    })
  }
}


})();
