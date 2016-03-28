(function(){
  app.factory('socket', ["$rootScope", function($rootScope) {
    console.log("I SEE SOCKET FACTORY");

    // var mySocket = io('http://50.207.137.70:3000')

    // var mySocket = io('http://127.0.0.1:3000')

    var mySocket = io($rootScope.APIurl)

    return mySocket
  }])
})()

