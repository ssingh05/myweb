var updateApp = angular.module('updateApp', []);




updateApp.controller('updateController', function($scope, $http) {
        $http.get("app/json/update.json").success(function(data) {
            $scope.teams = data.teams;
            console.log(data.teams);
            //  console.log($scope.teams);
        });




        $scope.save = function() {
          $http.post('app/json/update.json', $scope.languages).then(function(data) {
     // $scope.msg = 'Data saved';

       $scope.teams.push($scope.teams); 
            alert('ok'); 
            console.log($scope.msg); 

    });
         
        };





});
