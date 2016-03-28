(function() {
  'use strict'
  app.factory('findMatch', [
    function() {
    //use lodash to loop through array of past visitor objects
    //return the object if emails match
      return function(arrayToSearch, targetParam, valueToMatch) {
        var arrayOfMatches = _.filter(arrayToSearch, function(obj) {
          if (_.includes(obj[targetParam], valueToMatch)) {
            return obj
          }
        })
        return arrayOfMatches
      }
    }
  ])
})()
