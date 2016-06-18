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
        var connection = new WebSocket('ws://localhost:8000', ['soap', 'xmpp']);
        // When the connection is open, send some data to the server
        connection.onopen = function () {
            connection.send('Ping'); // Send the message 'Ping' to the server
            console.log('WebSocket Connected')
        };

        // Log errors
        connection.onerror = function (error) {
            console.log('WebSocket Error ' + error);
        };

        // Log messages from the server
        connection.onmessage = function (e) {
            console.log('Server: ' + e.data);
        };

  }]);