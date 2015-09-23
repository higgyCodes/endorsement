utahVotes.controller("createCtrl", function($scope, $firebaseObject) {
	
	var ref = new Firebase("https://utah-votes.firebaseio.com/");
  	var obj = $firebaseObject(ref);
  	obj.$loaded().then(function() {
  	$scope.raceBuilder = []
  	$scope.header = ["Race Type"]
  	$scope.list = []
  	$scope.races = obj.race
  	$scope.county = obj.counties

  	$scope.raceType = function(item) {
  		 $scope.raceBuilder[0] = item
  		 console.log($scope.raceBuilder)
  		 $scope.raceBuilder.splice(1,4);
  		 console.log($scope.raceBuilder);
  		 if (item === "City Municipal") {
  		 	$scope.header = [item, "Select County", "Select City", "Select Race"]
  		 	$scope.list = obj.counties
  		 }
  		 $scope.header[0] = item;
  	}

  	$scope.firstChoice = function(list) {
  		$scope.raceBuilder[1] = list
  		$scope.raceBuilder.splice(2,4);
  		$scope.header[1] = list
  		for (i = 0; i < obj.counties.length; i++) {
  			if (list === obj.counties[i]) {
  				$scope.cities = obj.cities[i];
  			}
  		}
  	}

  	$scope.secondChoice = function(list) {
  		$scope.raceBuilder[2] = list
  		$scope.raceBuilder.splice(3,4);
  		$scope.header[2] = list
  		$scope.munirace = obj.munirace
  	}

  	$scope.thirdChoice = function(list) {
  		$scope.raceBuilder[3] = list;
  		$scope.header[3] = list

 
  	}

$scope.candidateList = []
var candidate = 0
// Add candidate button
	$scope.addCandidate = function() {
		$scope.candidateList.push(candidate)
		candidate += 1
	}

	$scope.removeCandidate = function(list) {
		console.log("Function Working", list)
		delete $scope.candidateList[list]
	}

})
})