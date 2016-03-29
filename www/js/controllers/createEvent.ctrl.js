app.controller('createEvent', ['$scope', '$stateParams', '$rootScope', 'socket', 'query',
  function($scope, $stateParams, $rootScope, socket, $query) {

  $query.getAllUserData()
    .then(function(userData) {
      $rootScope.userData = userData
      $rootScope.refreshIndicator = true
      console.log("refreshed userData", userData);
    })


  var selectedClockId = $stateParams.clockId
  $scope.$watch(function() {
    $scope.clock = _.filter($rootScope.userData.clocks, {_id: selectedClockId})
    $scope.clock = $scope.clock[0]
  })

  $scope.createNewEvent = function() {
    console.log("you clicked create new event!");
    var eventData = {
      email: $rootScope.userData.email,
      firstName: $rootScope.userData.firstName,
      lastName: $rootScope.userData.lastName,
      adminId: $scope.clock._id,
      group: $scope.group,
      activity: $scope.activity,
      mobileUserId:$rootScope.userData._id
    }
    // fire socket.io event
    socket.emit('createClockerEvent', eventData)
  }

  $scope.signOut = function() {
    var mobileUserId = {
      mobileUserId: $rootScope.userData._id,
      adminId: $scope.clock._id
    }
    socket.emit('signOutMobileUser', mobileUserId)
  }

}])
