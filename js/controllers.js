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
  $scope.candidates = false;
  obj.$loaded().then(function() {
    var breadCrumb = [];
    var typeList = [];
    var countyList = [];
    var cityList = [];
    var raceList = [];
    var candidateList = [];
    var nav = ""
    
    for (i = 0; i < obj.entries.length; i++) {
      var counter = 0;
      for (s = 0; s < typeList.length; s++) {
        var type = typeList[s];
        if (obj.entries[i].race === type) {
          counter += 1
        }
      }
      if (counter == 0) {
        typeList.push(obj.entries[i].race)
      }
    }

  $scope.select = typeList;

  $scope.navigate = function(item) {

    console.log(nav)

    if($scope.select === raceList) {
      for (i = 0; i < obj.entries.length; i++) {
        if(obj.entries[i].munirace === item) {
          $scope.cand = true;
          $scope.candidates = obj.entries[i].candidates
          $scope.endorsements = obj.entries[i].endorsements;
        }
      };
    }

    // City Selector
    if (nav === 'munirace') {
      breadCrumb.push(item)
      console.log("Bread Crumb", breadCrumb)
      for (i = 0; i < obj.entries.length; i++) {
        var counter = 0
        console.log(item)
        for (s = 0; s < raceList.length; s++) {
          race = raceList[s];
          
          if (obj.entries[i].munirace === race) {
            counter += 1
          }
        }
        if (counter == 0 && obj.entries[i].city === item) {
            raceList.push(obj.entries[i].munirace)
            console.log(raceList);
        }
      }
    $scope.select = raceList;
    nav = raceList
    };

    if (nav === 'city') {
      breadCrumb.push(item)
      console.log(breadCrumb)
      for (i = 0; i < obj.entries.length; i++) {
        var counter = 0
        for (s = 0; s < cityList.length; s++) {
          city = cityList[s];
          
          if (obj.entries[i].city === city) {
            counter += 1
          }
        }
        if (counter == 0 && obj.entries[i].county === item) {
            cityList.push(obj.entries[i].city)
        }
      }
    $scope.select = cityList;
    nav = 'munirace'
    };

  if (item === "City Municipal") {
      breadCrumb.push(item);
      console.log("Breadcrumb", breadCrumb);
      for (i = 0; i < obj.entries.length; i++) {
        var counter = 0
        for (s = 0; s < countyList.length; s++) {
          county = countyList[s];
          
          if (obj.entries[i].race === type) {
            counter += 1
          }
        }
        if (counter == 0) {
            countyList.push(obj.entries[i].county)
        }
      }
    $scope.select = countyList;
    nav = 'city'
    };


  };

  });


});
