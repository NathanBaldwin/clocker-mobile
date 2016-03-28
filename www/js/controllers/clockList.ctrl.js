
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
        // getAdminData()
        console.log("no refresh indicator");
        $query.getAllUserData()
          .then(function(userData) {
            $rootScope.userData = userData
            $rootScope.refreshIndicator = true
          })
      }

      $scope.deleteClock = function() {
        console.log("you clicked delete clock!")
        $query.deleteClock()
      }


      $scope.chats = Chats.all();
      $scope.remove = function(chat) {
        Chats.remove(chat);
      }
  }])
})()
