(function() {
  'use strict'
  app.factory('httpDELETE', ["$http", "$q",
    function($http, $q) {

      return function(route, dataToSave) {
        var deferred = $q.defer()
        var config = {
          method: "DELETE",
          withCredentials: true,
          url: route,
          data: dataToSave,
          headers: {"Content-Type": "application/json;charset=utf-8"}
        }
        console.log("FIRED POST");
        $http(config)
          .success(function(retunedData) {
            console.log("Successful DELETE request from " + route, retunedData)
            deferred.resolve(retunedData)
          })
          .error(function(error, status) {
            console.log("status:", status)
            console.log("!ERROR ERROR! from DELETE to " + route, error)
            deferred.reject(error)
          })
          return deferred.promise
      }
    }
  ])

})()
