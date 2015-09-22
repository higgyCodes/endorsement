utahVotes.controller("createCtrl", function($scope, $firebaseObject) {

$scope.test = "Test"
var ref = new Firebase("https://utah-votes.firebaseio.com/");
  var obj = $firebaseObject(ref);
  obj.$loaded().then(function() {
  console.log(obj.race)




})
})