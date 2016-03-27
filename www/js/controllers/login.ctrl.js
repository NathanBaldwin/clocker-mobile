(function() {

  /// this module allows the user to log in/register with email and password for the website ///
  app.controller('login', ["$scope", "$location", "$rootScope", "$http", "$state", "query",
    function($scope, $location, $rootScope, $http, $state, $query) {
      console.log("I see login!!")


      $scope.login = function() {
        console.log("you clicked login!");
        var credentials = {
          email: $scope.email,
          password: $scope.password,
          mobileUser: true
        }
        console.log("credentials", credentials);

        console.log("credentials", credentials);

        $http.post($rootScope.APIurl + '/loginMobileUser', credentials, {
          withCredentials: true
        })
          .success(function(uid) {
            console.log("user info returned:", uid);
            $rootScope.uid = uid
            $rootScope.refreshIndicator = true //each time visitor and backend controllers load
            //we'll check this variable. If false, we'll make a query to db to refresh data stored
            //on $rootScope
            $rootScope.userData = {}
            $state.go('tab.clockList')
            $query.getAllUserData()
              .then(function(userData) {
                console.log("all returned user data:", userData);
                $rootScope.userData = userData
                // socket.emit('join', {adminId: uid})
              })
            })
          .error(function(error, status) {
            console.log("status:", status)
            $state.go('login')
            $scope.error_message = error
          })
      }
  }])
})()
