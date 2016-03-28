(function() {
  app.controller('register', ["$scope", "$http", "$location", "$rootScope", "socket",
    function($scope, $http, $location, $rootScope, socket) {
      console.log("I see admin Sing Up!!")

      $scope.$on('$destroy', function () {
        console.log("FIRED DESTROY! - backend-activity")
        socket.removeAllListeners()
      })

      $scope.createNewUser = function() {
        console.log("you clicked register!");
        var adminFormData = {
          "username": $scope.username,
          "firstName": $scope.firstName,
          "lastName": $scope.lastName,
          "fullName": $scope.firstName + ' ' + $scope.lastName,
          "email": $scope.email,
          "password": $scope.password,
          "verify": $scope.verifyPassword
        }

        $http.post($rootScope.APIurl + '/registerMobileUser', adminFormData)
        .success(function(user){
          $location.path('/login');
        })
        .error(function(err){
          $scope.error_message = err;
        });
      }

  }])
})()
