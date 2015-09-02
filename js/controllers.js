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

  obj.$loaded().then(function() {
    console.log("loaded record:", obj);
    $scope.year = obj
  });

});
