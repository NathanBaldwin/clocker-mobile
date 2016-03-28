
app.controller('manageInvites', ['$scope', '$rootScope', 'query',
  function($scope, $rootScope, $query) {

  $scope.$on('$destroy', function () {
    console.log("FIRED DESTROY! - backend-activity")
    socket.removeAllListeners()
  })

  if(!$rootScope.refreshIndicator) {
    // getAdminData()
    console.log("no refresh indicator");
    $query.getAllUserData()
      .then(function(userData) {
        $rootScope.userData = userData
        $rootScope.refreshIndicator = true
        console.log("refreshed userData", userData);
      })
    }

  $scope.declineInvite = function(inviteId) {
    console.log("you clicked on DECLINE invite", inviteId)
  }
  $scope.acceptInvite = function(inviteId) {
    console.log("you clicked on ACCEPT invite", inviteId)
    var invite = {
      inviteId: inviteId
    }
    $query.acceptInvite(invite)
      .then(function(updatedUserData) {
        console.log("updatedUserData", updatedUserData)
      })
  }

}])
