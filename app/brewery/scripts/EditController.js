angular
  .module('brewery')
  .controller("EditController", function ($scope, Brewery, supersonic) {
    $scope.brewery = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Brewery.find(steroids.view.params.id).then( function (brewery) {
      $scope.$apply(function() {
        $scope.brewery = brewery;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.brewery.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
