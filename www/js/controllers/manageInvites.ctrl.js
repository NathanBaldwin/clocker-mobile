
app.controller('manageInvites', ['$scope', '$rootScope', 'query', 'findByIdAndRemove', 'findMatch',
  function($scope, $rootScope, $query, findByIdAndRemove, findMatch) {

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
        var invitations = $rootScope.userData.invitations
        var match = findMatch(invitations, "_id", inviteId)
        $rootScope.userData.clocks.push(match[0])
        findByIdAndRemove(invitations, "_id", inviteId)

      })
  }

}])
