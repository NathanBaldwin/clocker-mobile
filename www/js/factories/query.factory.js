(function() {
  'use strict'
  app.factory('query', ["httpGET", "$rootScope",
    function($httpGET, $rootScope) {

      return {
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
