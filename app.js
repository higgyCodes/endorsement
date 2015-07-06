
var utahVotes = angular.module('utahVotes', ['ui.router', 'firebase']);

utahVotes.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
        
    $stateProvider
    
    // Home state

        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })


    // Endorsments and nested views

        .state('endorsements', {
            url: '/endorsements',
            templateUrl: 'endorsements.html'
        })

        .state('endorsements.racetype', {
            url: '/racetype',
            templateUrl: 'racetype.html'
        })

         .state('endorsements.racetype.menu', {
            url: '/menu',
            templateUrl: 'menu.html'
            
        })

         .state('endorsements.racetype.municipal', {
            url: "/municipal ",
            templateUrl: 'municipal.html'
            
        })

         .state('endorsements.racetype.city', {
            url: "/city",
            templateUrl: 'city.html'
            
        })

         .state('endorsements.racetype.race', {
            url: "/race",
            templateUrl: 'race.html'
            
        })


    // Lobbying and nested views

        .state('lobbying', {
            url: '/lobbying',
            templateUrl: 'lobbying.html'
        })

        // Nested Endorsements States
       
});

utahVotes.controller('myCtrl', ['$scope', function($scope){

	$scope.setFilter = function(whichFilter){
		if ($scope.filterBy === whichFilter) {
			$scope.filterBy = "-" + whichFilter;
		} else {
			$scope.filterBy = whichFilter;
		}
	};

}]);

utahVotes.controller("fireCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://DAZZLING-TORCH-2032.firebaseio.com/");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
  $scope.cities = $firebaseObject(ref.child('city'));
  $scope.test = $firebaseObject(ref.child('candidates'));

});

