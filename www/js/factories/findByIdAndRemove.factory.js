(function() {
  'use strict'
  app.factory('findByIdAndRemove', [
    function() {

      return function(array, idKey, id) {
        console.log("firing remove service");
        console.log(array, idKey, id);
        for(var i = 0; i < array.length; i++) {
          console.log("array object:", array[i]);
          if(array[i][idKey] == id) {
            console.log("found a match!");
            array.splice(i, 1);
            break
          }
        }

      }

    }
  ])
})()
