(function () {
  "use strict";
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var NarrowCtrl = this;
    NarrowCtrl.searchTerm= '';
    NarrowCtrl.matchedItems = [];
    NarrowCtrl.getMatchedMenuItems = function () {
        var promise = MenuSearchService.getMatchedMenuItems();
        promise.then(function (result) {
          var foundItems = [];
          result.data.menu_items.forEach(function matchItems(currentValue) {
            if(currentValue.description.match(NarrowCtrl.searchTerm)) {
              foundItems.push(currentValue);
            }
          });
          NarrowCtrl.matchedItems = foundItems;
          console.log(NarrowCtrl.matchedItems);
        })
        .catch(function (error) {
          console.log("search data request is not successful!");
        });
    }
  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function() {
      var response = $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      });

      return response;
    };
  }

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html'
    };

    return ddo;
  }
})();
