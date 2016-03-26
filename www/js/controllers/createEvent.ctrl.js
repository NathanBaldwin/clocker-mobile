app.controller('createEvent', ['$scope', '$stateParams', '$rootScope', 'Chats',
  function($scope, $stateParams, $rootScope, Chats) {

  console.log("I see createEvent controller!")

  console.log("all clocks", $rootScope.userData)

  var selectedClockId = $stateParams.chatId

  $scope.clock = _.filter($rootScope.userData.clocks, {_id: selectedClockId})

  $scope.clock = $scope.clock[0]

  console.log("clock.orgName", $scope.clock.orgName);

}])
