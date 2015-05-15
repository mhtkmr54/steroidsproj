angular
  .module('brewery')
  .controller("ShowController", function ($scope, Brewery, supersonic) {
    $scope.brewery = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Brewery.find($scope.dataId).then( function (brewery) {
        $scope.$apply( function () {
          $scope.brewery = brewery;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.brewery.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });