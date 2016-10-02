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
    NarrowCtrl.foundItems = '';
    NarrowCtrl.getMatchedMenuItems = function () {
        foundItems = MenuSearchService.getMatchedMenuItems(NarrowCtrl.searchTerm);
    }
  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      var response = $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      }).then(function (result) {
        var foundItems = [];
        result.data.menu_items.forEach(function matchItems(currentValue) {
          if(currentValue.description.match(searchTerm)) {
            foundItems.push(currentValue);
          }
        });
        console.log(foundItems);
        return foundItems;
      })
      .catch(function (error) {
        console.log("search data request is not successful!");
      });

      return response;
    }
  }

  function FoundItems() {
    var ddo = {

    };

    return ddo;
  }
})();
