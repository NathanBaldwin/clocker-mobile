
(function() {
  app.controller('clockList', ["$scope", "$http", "$location", "$rootScope", "Chats", "query",
    function($scope, $http, $location, $rootScope, Chats, $query) {
      console.log("I see clockList!!")
      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //
      //$scope.$on('$ionicView.enter', function(e) {
      //});

      $scope.deleteMode = false

      if(!$rootScope.refreshIndicator) {
        console.log("no refresh indicator");
        $query.getAllUserData()
          .then(function(userData) {
            $rootScope.userData = userData
            $rootScope.refreshIndicator = true
          })
      }

      $scope.deleteClock = function(clockId) {
        console.log("you clicked delete clock!")
        console.log("clockId", clockId);
        $query.deleteClock({"clockId": clockId})
          .then(function(returnedData) {
            console.log("data returned from promise:", returnedData);

            for(var i = 0; i < $rootScope.userData.clocks.length; i++) {
              if($rootScope.userData.clocks[i]._id == clockId) {
                  console.log("clock:", $rootScope.userData.clocks[i]);
                  $rootScope.userData.clocks.splice(i, 1);
                  break
              }
            }
          })
      }

  }])
})()
