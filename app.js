
var utahVotes = angular.module('utahVotes', ['ngRoute']);

utahVotes.config(function($routeProvider) {
    $routeProvider
        .when('/endorsements', {
            templateUrl: 'endorsements.html',
            controller: 'myCtrl'
        })
        .when('/lobbying', {
            templateUrl: 'lobbying.html',
            controller: 'myCtrl'
        })
                .when('/other', {
            templateUrl: 'other.html',
            controller: 'CalcCtrl'
        })
        .otherwise({
            redirectTo: '/endorsements.html'
        });
});

utahVotes.controller('myCtrl', ['$scope', function($scope){

	$scope.filterBy = '';

	$scope.setFilter = function(whichFilter){
		if ($scope.filterBy === whichFilter) {
			$scope.filterBy = "-" + whichFilter;
		} else {
			$scope.filterBy = whichFilter;
		}
	};

	$scope.transactions = [
	{
		title: 'a',
		cost: 6,
		notes: 'x'
	},
	{
		title: 'b',
		cost: 1,
		notes: 'w'
	},
	{
		title: 'c',
		cost: 2,
		notes: 'v'
	},
	{
		title: 'd',
		cost: 3,
		notes: 'u'
	},
	{
		title: 'e',
		cost: 4,
		notes: 'z'
	},
	{
		title: 'f',
		cost: 5,
		notes: 'y'
	}
	];

	$scope.sum = function() {
		$scope.total = "";
		for (var i = 0; i < $scope.transactions.length; i++) {
			$scope.total += "+" + $scope.transactions[i].cost;
		}
		$scope.total = eval($scope.total);
		return $scope.total;
	};

	 $scope.submit = function() {
          var newItem = {};
          newItem.title = $scope.title;
          newItem.cost = $scope.cost;
          newItem.notes = $scope.notes;
          newItem.createdOn = Date.now();

          $scope.transactions.push(newItem);


          $scope.title	= '';
          $scope.cost	= '';
          $scope.notes	= '';
        };



}]);