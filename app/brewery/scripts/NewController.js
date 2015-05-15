angular
  .module('brewery')
  .controller("NewController", function ($scope, Brewery, supersonic) {
    $scope.brewery = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newbrewery = new Brewery($scope.brewery);
      newbrewery.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });