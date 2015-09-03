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
    console.log("loaded record:", obj)
    
    $scope.selected = obj.years
    console.log(obj.years)

    var breadcrumb = []
    var placehold = []
    var ladder = []

    $scope.select = function(data) {
      if (breadcrumb[3] === true) {
        breadcrumb[4] = data
      } else if (breadcrumb[2] === true) {
        breadcrumb[3] = data
      } else if (breadcrumb[1] === true) {
        breadcrumb[2] = data;
      } else if (ladder[0] === true) {
        breadcrumb[1] = data
        $scope.selected = obj.counties
        console.log($scope.selected)
      } else {
        ladder[0] = true
        breadcrumb[0] = data;
        console.log('last statement')
        placehold = breadcrumb[0]
        $scope.selected = obj.year[data].electiontype;
        console.log(data)
      };
    };



  });


});
