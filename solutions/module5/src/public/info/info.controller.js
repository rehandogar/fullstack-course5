(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService', 'InfoService'];
function InfoController(MenuService, InfoService) {
  var $ctrl = this;
  $ctrl.registered = InfoService.getRegistered();

  if ($ctrl.registered === true) {
    $ctrl.firstName = InfoService.getFirstName();
    $ctrl.lastName = InfoService.getLastName();
    $ctrl.email = InfoService.getEmail();
    $ctrl.phoneNumber = InfoService.getPhoneNumber();
    $ctrl.favoriteMenuItem = InfoService.getFavoriteMenuItem();
  }
}


})();
