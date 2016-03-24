
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

  $scope.declineInvite = function(inviteId) {
    console.log("you clicked on DECLINE invite", inviteId)
  }
  $scope.acceptInvite = function(inviteId) {
    console.log("you clicked on ACCEPT invite", inviteId)
    var invite = {
      inviteId: inviteId
    }
    // $query.acceptInvite(invite)
    //   .then(function(updatedUserData) {
    //     console.log("updatedUserData", updatedUserData);
    //   })
  }

}])
