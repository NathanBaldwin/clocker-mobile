app.controller('createEvent', ['$scope', '$stateParams', '$rootScope', 'socket',
  function($scope, $stateParams, $rootScope, socket) {

  // $scope.$on('$destroy', function () {
  //   console.log("FIRED DESTROY! - backend-activity")
  //   socket.removeAllListeners()
  // })

  var selectedClockId = $stateParams.chatId

  $scope.clock = _.filter($rootScope.userData.clocks, {_id: selectedClockId})

  $scope.clock = $scope.clock[0]
  console.log("userData", $rootScope.userData);

  $scope.setSelectedGroup = function() {
    $scope.group = this.group.groupName
  }

  $scope.setSelectedActivity = function() {
    $scope.activity = this.activity.activityName
  }

  $scope.createNewEvent = function() {
    console.log("you clicked create new event!");
    var eventData = {
      email: $rootScope.userData.email,
      firstName: $rootScope.userData.firstName,
      lastName: $rootScope.userData.lastName,
      adminId: $scope.clock._id,
      group: $scope.group,
      activity: $scope.activity
    }
    // fire socket.io event
    socket.emit('createClockerEvent', eventData)
  }

}])
