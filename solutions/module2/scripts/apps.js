(function () {
  "use strict";
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController (ShoppingListCheckOffService) {
    var BuyCtrl = this;
    BuyCtrl.toBuy = ShoppingListCheckOffService.getToBuy();
    BuyCtrl.bought = function (index) {
      ShoppingListCheckOffService.bought(index);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
      var BoughtCtrl = this;
      BoughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = [
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Sode bottle",
        quantity: "10"
      },
    ];

    var boughtItems = [];

    service.getToBuy = function () {
      return  toBuy;
    }

    service.bought = function (index) {
      var currentlyBought = toBuy.splice(index, 1);
      console.log(currentlyBought[0]);
      boughtItems.push(currentlyBought[0]);
    }

    service.getBoughtItems = function () {
      return boughtItems;
    }
  }
})();
