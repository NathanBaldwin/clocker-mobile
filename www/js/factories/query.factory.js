(function() {
  'use strict'
  app.factory('query', ["httpGET", "$rootScope", "httpPOST", "httpDELETE",
    function($httpGET, $rootScope, $httpPOST, $httpDELETE) {

      return {
        getAllUserData: function() {
          return $httpGET('http://clockeronline.com' + '/singleMobileUser')
        },
        acceptInvite: function(inviteId) {
          return $httpPOST($rootScope.APIurl + '/mobileUser/acceptInvite', inviteId)
        },
        deleteClock: function(clockId) {
          return $httpDELETE($rootScope.APIurl + '/mobileUser/deleteClock', clockId)
        }
      }
    }
  ])
})()
