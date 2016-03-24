(function() {
  app.controller('register', ["$scope", "$http", "$location", "$rootScope",
    function($scope, $http, $location, $rootScope) {
      console.log("I see admin Sing Up!!");

      $scope.createNewUser = function() {
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
