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


var candidateAction = "Endorse Candidate?"
$scope.endorseChoices = ["Endorsed", "Not Endorsed", "Third Option"]
$scope.endorseClick = function(choice) {
  candidateAction = choice;
  console.log(candidateAction)
}

$scope.candidateName = []
$scope.repeater = function(candidate){
  console.log(candidate)
  $scope.candidateList.splice(candidate, 1)
  $scope.candidateName.splice(candidate, 1)
  $scope.candidateList
}

var d = new Date();
var currentYear = d.getFullYear()
console.log(currentYear)


console.log(obj)

$scope.saveRace = function() {
  var id = obj.entries.length
  console.log("success")
  ref.child("entries").push({
    
    "year" : currentYear,
    "city" : $scope.raceBuilder[2],
    "county" : $scope.raceBuilder[1],
    "munirace" : $scope.raceBuilder[3],
    "race": $scope.raceBuilder[0],
    "candidates" : $scope.candidateName
    })
  $scope.candidateName = [];
  $scope.candidateList = [];
  $scope.racebuilder = [];

  $scope.header = ["race Type"];
}



})
})