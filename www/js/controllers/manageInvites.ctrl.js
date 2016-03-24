app.controller('manageInvites', ['$scope', '$rootScope', 'query',
  function($scope, $rootScope, $query) {

  if(!$rootScope.refreshIndicator) {
    // getAdminData()
    console.log("no refresh indicator");
    $query.getAllUserData()
      .then(function(userData) {
        $rootScope.userData = userData
      })
  }

  $scope.settings = {
    enableFriends: true
  };
}]);
