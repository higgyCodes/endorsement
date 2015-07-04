
var utahVotes = angular.module('utahVotes', ['ui.router', "firebase"]);

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

utahVotes.controller('myCtrl', ['$scope', function($scope, $firebaseObject){
    var ref = new Firebase("https://dazzling-torch-2032.firebaseio.com");

    $scope.data = $firebaseObject(ref);
    
	$scope.cities = ['Salt Lake', 'South Salt Lake', 'Draper', 'Midvale']

	$scope.setFilter = function(whichFilter){
		if ($scope.filterBy === whichFilter) {
			$scope.filterBy = "-" + whichFilter;
		} else {
			$scope.filterBy = whichFilter;
		}
	};

}]);