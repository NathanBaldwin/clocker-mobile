(function(){
  app.factory('socket', ["$rootScope", function($rootScope) {
    console.log("I SEE SOCKET FACTORY");

    // var mySocket = io('http://50.207.137.70:3000')

    // var mySocket = io('http://127.0.0.1:3000')

    var socket = io($rootScope.APIurl)

    return {
      on: function (eventName, callback) {
        socket.on(eventName, function () {
          var args = arguments
          $rootScope.$apply(function () {
            callback.apply(socket, args)
          })
        })
      },
      emit: function (eventName, data, callback) {
        socket.emit(eventName, data, function () {
          var args = arguments
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args)
            }
          })
        })
      },
      removeAllListeners: function () {
        console.log("trying to remove listenvers")
          socket.removeAllListeners()
      },
      getSocket: function() {
        return socket
      }
    }
  }])
})()

