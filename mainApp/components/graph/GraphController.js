ANBIOApp.controller('GraphController', ['$scope','$location', '$http', '$routeParams',
  function ($scope, $location, $http, $routeParams) {
      $scope.FetchData = function(url, doneCallback){
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if (this.readyState != 4){ 
                    return; 
                 }
                 //Final State but status not OK
                 if (this.status != 200) {
                    return;
                 }
                 doneCallback(this.responseText);
            };
            
            xhr.open("GET", url);
            xhr.send();  
        }
  }]);