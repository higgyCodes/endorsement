utahVotes.controller('myCtrl', ['$scope', function($scope){

 // Dont know what this does
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

  ref.once("value", function(snapshot) {
  // The callback function will get called twice, once for "fred" and once for "barney"
    snapshot.forEach(function(childSnapshot) {
    // key will be "fred" the first time and "barney" the second time
    var key = childSnapshot.key();

    // childData will be the actual contents of the child
    var childData = childSnapshot.val();
    console.log(key, childData)
  });
});


  
  obj.$loaded().then(function() {
    console.log("success")
    $scope.breadCrumb = ["Election Type"];
    var typeList = [];
    $scope.select = typeList;
    $scope.bcEnd = "Election Type"
    var countyList = [];
    var cityList = [];
    var raceList = [];
    var candidateList = [];
    var nav = ""
    var bcNum
    console.log(obj.entries)
    
    for (i = 0; i < obj.entries.length; i++) {
      var counter = 0;
      console.log(counter)
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

  



  $scope.breadOne = function() {
  console.log($scope.select)
  $scope.select = typeList;
  $scope.breadCrumb = $scope.breadCrumb.splice(0,1);
  bcNum = $scope.breadCrumb.length - 1
  $scope.bcEnd = $scope.breadCrumb[bcNum]
  }

$scope.breadTwo = function() {
  console.log($scope.select)
  $scope.select = countyList;
  $scope.breadCrumb = $scope.breadCrumb.splice(0,2);
  var bcNum = $scope.breadCrumb.length - 1
  $scope.bcEnd = $scope.breadCrumb[bcNum]
}

$scope.breadThree = function() {
  console.log($scope.select)
  $scope.select = cityList;
  $scope.breadCrumb = $scope.breadCrumb.splice(0,3);
  var bcNum = $scope.breadCrumb.length - 1
  $scope.bcEnd = $scope.breadCrumb[bcNum]
}

$scope.breadFour = function() {
  console.log($scope.select)
  $scope.select = cityList;
  $scope.breadCrumb = $scope.breadCrumb.splice(0,4);
  var bcNum = $scope.breadCrumb.length - 1
  $scope.bcEnd = $scope.breadCrumb[bcNum]
}

  $scope.navigate = function(item) {
    // Working on Breadcrumb
    
    if($scope.select === raceList) {
      $scope.breadCrumb.push(item)
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
      $scope.breadCrumb.push(item)
      console.log("Bread Crumb", $scope.breadCrumb)
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
      $scope.breadCrumb.push(item)
      console.log($scope.breadCrumb)
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
      $scope.breadCrumb.push(item);
      console.log("Breadcrumb", $scope.breadCrumb);
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
    var bcNum = $scope.breadCrumb.length - 1
    $scope.bcEnd = $scope.breadCrumb[bcNum]

  };




  });


});
