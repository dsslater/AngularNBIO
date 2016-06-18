ANBIOApp.controller('DataViewController', ['$scope','$location', '$http', '$routeParams',
  function ($scope, $location, $http, $routeParams) {
      $scope.counter = function(n) {
        var arr = new Array(n);
        return arr;
      }
  }]);