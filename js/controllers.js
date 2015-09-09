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
  var ref = new Firebase("https://utah-votes.firebaseio.com/");
  var obj = $firebaseObject(ref);
  var years = obj.years;
  obj.$loaded().then(function() {
    var typeList = [];
    var countyList = [];
    
    for (i = 0; i < obj.entries.length; i++) {
      var counter = 0;
      for (s = 0; s < typeList.length; s++) {
        var type = typeList[s];
        if (obj.entries[i].race === type) {
          counter += 1
        }
      } 
      console.log(counter)
      if (counter == 0) {
        typeList.push(obj.entries[i].race)
        console.log(typeList);
      }
    }

  $scope.select = typeList;

  $scope.navigate = function(item) {
    for (i = 0; i < obj.entries.length; i++) {
      var counter = 0
      for (s = 0; s < countyList.length; s++) {
        county = countyList[s];
        
        if (obj.entries[i].race === type) {
          counter += 1
        }
      }
    console.log(counter)
      if (counter == 0) {
          countyList.push(obj.entries[i].county)
          console.log(countyList);
      }
    }
  }

  });


});
