angular
  .module('geolocation')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    $scope.getPosition = function() {
      supersonic.ui.dialog.alert("Interstellar!");
    };
  });