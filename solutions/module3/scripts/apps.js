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
    NarrowCtrl.emptySearch = '';
    NarrowCtrl.matchedItems = [];

    NarrowCtrl.removeItem = function (index) {
      NarrowCtrl.matchedItems.splice(index, 1);
    }

    NarrowCtrl.getMatchedMenuItems = function () {
      if (NarrowCtrl.searchTerm) {
        NarrowCtrl.emptySearch = '';
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
        } else {
          NarrowCtrl.emptySearch = 'Nothing found';
        }
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
