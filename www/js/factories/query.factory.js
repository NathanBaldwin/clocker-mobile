(function() {
  'use strict'
  app.factory('query', ["httpGET", "$rootScope",
    function($httpGET, $rootScope) {

      return {
        getAllUserData: function() {
          return $httpGET($rootScope.APIurl + '/singleMobileUser')
        }
      }
    }
  ])
})()
