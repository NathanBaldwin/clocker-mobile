(function() {
  'use strict'
  app.factory('query', ["httpGET", "$rootScope", "httpPOST", "httpDELETE",
    function($httpGET, $rootScope, $httpPOST, $httpDELETE) {

      return {
        getAllUserData: function() {
          return $httpGET($rootScope.APIurl + '/singleMobileUser')
        },
        acceptInvite: function(inviteId) {
          return $httpPOST($rootScope.APIurl + '/mobileUser/acceptInvite', inviteId)
        },
        deleteClock: function() {
          return $httpDELETE($rootScope.APIurl + '/mobileUser/deleteClock')
        }
      }
    }
  ])
})()
