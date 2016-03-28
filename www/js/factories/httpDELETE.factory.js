(function() {
  'use strict'
  app.factory('httpDELETE', ["$http", "$q",
    function($http, $q) {

      return function(route, dataToSave) {
        var deferred = $q.defer()
        console.log("FIRED PUT");
        $http.delete(route, dataToSave)
          .success(function(retunedData) {
            console.log("Successful DELETE request from " + route, retunedData);
            deferred.resolve(retunedData)
          })
        .error(function(error, status) {
          console.log("status:", status)
          console.log("!ERROR ERROR! DELETE to " + route, error)
          deferred.reject(error)
        })
        return deferred.promise
      }
    }
  ])

})()
