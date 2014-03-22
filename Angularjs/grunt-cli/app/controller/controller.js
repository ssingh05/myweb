/*
 create simple module
*/

var app = angular.module('app', ['ngRoute']); // make emply array for depedeny enjection.  use if it has dependency with otjer module



/*
best to create a objects
*/


var controllers = {};

controllers.friendsName = function($scope) {
    $scope.ourDetails = [{
        name: 'Surendra',
        age: '25',
        city: 'Bhopal'
    }, {
        name: 'Amrita',
        age: '27',
        city: 'Indore'

    }];

};


controllers.friendDetails = function($scope) {
    $scope.friendDetails = [{
        name: 'John',
        age: 25,
        gender: 'boy'
    }, {
        name: 'Jessie',
        age: 30,
        gender: 'girl'
    }, {
        name: 'Johanna',
        age: 28,
        gender: 'girl'
    }, {
        name: 'Joy',
        age: 15,
        gender: 'girl'
    }, {
        name: 'Mary',
        age: 28,
        gender: 'girl'
    }, {
        name: 'Peter',
        age: 95,
        gender: 'boy'
    }, {
        name: 'Sebastian',
        age: 50,
        gender: 'boy'
    }, {
        name: 'Erika',
        age: 27,
        gender: 'girl'
    }, {
        name: 'Patrick',
        age: 40,
        gender: 'boy'
    }, {
        name: 'Samantha',
        age: 60,
        gender: 'girl'
    }];

};


/*
Defining Routes 
*/


app.config(function($routeProvider) {

    $routeProvider
        .when('/controllerone', {
                controller: 'friendDetails',
                templateUrl: 'controller3.html'

            }, {
                controller: 'friendsName',
                templateUrl: 'controller3.html'

            }

    )
        .when('/controllerTwo', {
            controller: 'simpleControoller',
            templateUrl: 'views.html'
        })
        .when('/controllerThree', {
            controller: 'simpleControoller',
            templateUrl: 'view2.html'
        })
        .otherwise({
            redirectTo: ''
        });

});


controllers.simpleControoller = function($scope,simpleFactorty) {

    $scope.technologies = [];

    init();

    function init() {

        $scope.technologies = simpleFactorty.postCustomet();

    };

    // bind the view for button click
    $scope.addNewdetails = function() {
        $scope.technologies.push({
            name: $scope.place.newName,
            year: $scope.place.newYear,
            lastuse: $scope.place.newlast
        });
    };
};




/*
working on Angualr Factory
*/



app.factory('simpleFactorty', function($http) {
     var technologies =

   $http.get('app/json/content.json').success(
        function(data, status, headers, config){
            technologies = data.technologies;
            console.log('bsfkjhs');
             //return technologies;
             }
          
        ); 
 

    var factory = {};
    // factory.getCustomert = function(){

         //return technologies; 

    // }; 

    factory.postCustomet = function() {

       return technologies;
    };


    return factory;

});


// app.controller("jsonController", function($scope, $http) {

//     $http.get('app/json/content.json').success(
//         function(data, status, headers, config){
//             $scope.names = data.peoples;

//              }
            
//         )

// });


/*
Another way if using this 
*/


controllers.jsonController = function($scope, $http){

      $http.get('app/json/content.json').success(
        function(data, status, headers, config){
            $scope.techno = data.technologies;
            $scope.techno2 = data.technologies;

             }
            
        );
}; 




/*
Crete Simple controller
*/

app.controller(controllers);
