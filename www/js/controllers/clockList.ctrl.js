
(function() {
  app.controller('clockList', ["$scope", "$http", "$location", "$rootScope", "Chats", "query", "socket", "findByIdAndRemove",
    function($scope, $http, $location, $rootScope, Chats, $query, socket, findByIdAndRemove) {
      console.log("I see clockList!!")
      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //
      //$scope.$on('$ionicView.enter', function(e) {
      //});
      $scope.$on('$destroy', function () {
        console.log("FIRED DESTROY! - backend-activity")
        socket.removeAllListeners()
      })

      $scope.deleteMode = false

      if(!$rootScope.refreshIndicator) {
        console.log("no refresh indicator");
        $query.getAllUserData()
          .then(function(userData) {
            $rootScope.userData = userData
            $rootScope.refreshIndicator = true
            socket.emit('mobileUserJoin', userData._id)
          })

      }

      socket.on('adminInvitation', function(adminData) {
        console.log("invitation received from admin:", adminData)
        $rootScope.userData.invitations.push(adminData)
      })

      socket.on('updateDropdowns', function() {
        console.log("SOMEONE UPDATED A DROPDWON LIST")
        $query.getAllUserData()
          .then(function(userData) {
            $rootScope.userData = userData
          })
      })

      $scope.deleteClock = function(clockId) {
        console.log("you clicked delete clock!")
        console.log("clockId", clockId);
        $query.deleteClock({"clockId": clockId})
          .then(function(returnedData) {
            findByIdAndRemove($rootScope.userData.clocks, '_id', clockId)
          })
      }

  }])
})()
