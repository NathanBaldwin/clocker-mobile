(function(){
  app.factory('socket', [ function() {
    console.log("I SEE SOCKET FACTORY");
    // var myIoSocket = io.connect()
    var mySocket = io('http://localhost:3000')

    return mySocket
  }]);
})()

