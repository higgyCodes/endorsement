utahVotes.controller("createCtrl", function($scope, $firebaseObject) {
	
	var ref = new Firebase("https://utah-votes.firebaseio.com/");
  	var obj = $firebaseObject(ref);
  	obj.$loaded().then(function() {
  	$scope.raceBuilder = ["Race Type"]
  	$scope.list = []
  	$scope.races = obj.race
  	$scope.county = obj.counties

  	$scope.raceType = function(item) {
  		 $scope.raceBuilder[0] = item
  		 console.log($scope.raceBuilder)
  		 
  		 if (item === "City Municipal") {
  		 	$scope.header = "Select County"
  		 	$scope.list = obj.counties
  		 }
  	}

  	$scope.firstChoice = function(list) {
  		$scope.raceBuilder[1] = list
  		console.log($scope.raceBuilder)
  		for (i = 0; i < obj.counties.length; i++) {
  			if (list === obj.counties[i]) {
  				$scope.cities = obj.cities[i];
  				console.log(obj.cities[i])
  				$scope.headerTwo = "Select City"
  			}
  		}
  	}

  	$scope.secondChoice = function(list) {
  		
  	}


})
})