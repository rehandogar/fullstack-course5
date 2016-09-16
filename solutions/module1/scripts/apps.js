(function () {
  angular.module('lunchChecker', [])
  .controller('lunchCheckerController', lunchCheckerController)

  function lunchCheckerController($scope){
    $scope.dishes = ''
  }
})();
