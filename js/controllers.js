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
    var cityList = [];
    var nav = ""
    
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
    
    if (item === "City Municipal") {
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
    $scope.select = countyList;
    nav = 'county'
    };



    // City Selector
    if (nav === 'city') {
      for (i = 0; i < obj.entries.length; i++) {
        var counter = 0
        for (s = 0; s < cityList.length; s++) {
          city = cityList[s];
          
          if (obj.entries[i].city === city) {
            counter += 1
          }
        }
        if (counter == 0) {
            cityList.push(obj.entries[i].city)
            console.log(cityList);
        }
      }
    $scope.select = cityList;
    };

    if (nav === 'county') {
      for (i = 0; i < obj.entries.length; i++) {
        var counter = 0
        for (s = 0; s < countyList.length; s++) {
          county = countyList[s];
          
          if (obj.entries[i].county === county) {
            counter += 1
            console.log('COUNTER', counter)
          }
        }
      console.log(counter)
        if (counter == 0) {
            countyList.push(obj.entries[i].county)
            console.log(countyList);
        }
      }
    $scope.select = countyList;
    nav = 'city'
    };

  };

  });


});
