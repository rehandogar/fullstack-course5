(function () {
  angular.module('lunchChecker', [])
  .controller('lunchCheckerController', lunchCheckerController);

  lunchCheckerController.$inject = ['$scope'];
  function lunchCheckerController ($scope) {
    $scope.message = '';
    $scope.dishes = '';
    $scope.color = 'black';

    function notEmptyDishes(value) {
      return value != '' && value != ' ';
    }

    $scope.checkIfTooMuch = function () {
      var dishesArray = $scope.dishes.split(',');
      var filteredDishes = dishesArray.filter(notEmptyDishes);
      if(filteredDishes.length > 0 && filteredDishes.length <= 3) {
        $scope.message = 'Enjoy!';
        $scope.color = 'green';
      } else if (filteredDishes.length > 3) {
        $scope.message = 'Too much!';
        $scope.color = 'green';
      } else {
        $scope.message = 'Please enter data first';
        $scope.color = 'red';
      }
    }
  }
})();
