(function () {
  "use strict";
  var MenuApp = angular.module('MenuApp', ['ui.router']);

  MenuApp.$inject = ['$stateProvider'];
  MenuApp.config(function ($stateProvider) {
    var homeState = {
      name: 'home',
      url: '/home',
      template: 'home.html'
    }
    var itemsState = {
    name: 'items',
    url: '/items',
    template: 'items.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(itemsState);
  })

})();
