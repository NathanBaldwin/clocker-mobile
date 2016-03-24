(function() {
  'use strict'
  app.factory('query', ["httpGET", "$rootScope", "httpPOST",
    function($httpGET, $rootScope, $httpPOST) {

      return {
        loginMobileUser: function(credentials) {
          return $httpPOST($rootScope.APIurl + '/loginMobileUser', credentials)
        },
        getAllUserData: function() {
          return $httpGET($rootScope.APIurl + '/singleMobileUser')
        },
        acceptInvite: function(inviteId) {
          return $httpPOST($rootScope.APIurl + '/mobileUser/acceptInvite', inviteId)
        }
      }
    }
  ])
})()
