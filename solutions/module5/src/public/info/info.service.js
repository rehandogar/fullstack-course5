(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);

function InfoService() {
  var service = this;
  service.registered = false;

  service.saveInfo = function(firstName, lastName, email, phoneNumber, favoriteMenuItem) {
    service.firstName = firstName;
    service.lastName = lastName;
    service.email = email;
    service.phoneNumber = phoneNumber;
    service.favoriteMenuItem = favoriteMenuItem;
    service.registered = true;
  };

  service.getFirstName = function () {
    return service.firstName;
  };

  service.getLastName = function () {
    return service.lastName;
  };

  service.getEmail = function () {
    return service.email;
  };

  service.getPhoneNumber = function () {
    return service.phoneNumber;
  };

  service.getFavoriteMenuItem = function () {
    return service.favoriteMenuItem;
  };

  service.getRegistered = function() {
    return service.registered;
  }
}



})();
