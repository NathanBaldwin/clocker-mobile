(function() {

  /// this module allows the user to log in/register with email and password for the website ///
  app.controller('login', ["$scope", "$location", "$rootScope", "$http", "$state", "query", "socket",
    function($scope, $location, $rootScope, $http, $state, $query, socket) {
      console.log("I see login!!")

      $scope.login = function() {
        var credentials = {
          email: $scope.email,
          password: $scope.password,
          mobileUser: true
        }

        console.log("credentials", credentials);

        $query.loginMobileUser()
          .then(function(uid) {
            $rootScope.uid = uid
            $rootScope.refreshIndicator = true
            $rootScope.userData = {}
            $state.go('tab.clockList')
            $query.getAllUserData()
              .then(function(userData) {
                console.log("all returned user data:", userData);
                $rootScope.userData = userData
                socket.emit('join', {adminId: uid})
              })
          })
      }
  }])
})()
