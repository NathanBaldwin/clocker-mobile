(function(){
  app.factory('socket', [ function() {
    console.log("I SEE SOCKET FACTORY");

    // var mySocket = io('http://50.207.137.70:3000')
    var mySocket = io('http://127.0.0.1:3000')

    return mySocket
  }])
})()

