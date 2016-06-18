ANBIOApp.controller('DataViewController', ['$scope','$location', '$http', '$routeParams',
  function ($scope, $location, $http, $routeParams) {
      $scope.numRows = 1;
      $scope.numCols = 1;
      $scope.counter = function(n) {
        var arr = new Array(n);
        return arr;
      }
  }]);