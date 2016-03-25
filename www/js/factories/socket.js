(function(){
  app.factory('socket', [ function() {
    console.log("I SEE SOCKET FACTORY");

    var mySocket = 'testing'

    // var mySocket = io('http://50.207.137.70:3000')

    return mySocket
  }])
})()

