angular
  .module('brewery')
  .controller("IndexController", function ($scope, Brewery, supersonic) {
    $scope.brewerys = null;
    $scope.showSpinner = true;

    Brewery.all().whenChanged( function (brewerys) {
        $scope.$apply( function () {
          $scope.brewerys = brewerys;
          $scope.showSpinner = false;
        });
    });
  });