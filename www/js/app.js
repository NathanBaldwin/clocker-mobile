// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic', 'ui.bootstrap'])

app
  .run(['$ionicPlatform', '$rootScope',
    function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      // $rootScope.APIurl = "http://10.0.0.76:3000"
      $rootScope.APIurl = "http://clockeronline.com"

      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }])

  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider) {
    // $httpProvider.defaults.headers.delete['Content-Type'] = 'application/json; charset=utf-8';
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('login', {
      url: '/login',
      views: {
        '':{
            templateUrl: 'templates/login.html',
            controller: 'login'
            }
      }
    })
    .state('tab.manageInvites', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/manageInvites.html',
          controller: 'manageInvites'
        }
      }
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'register'
    })

    // Each tab has its own nav history stack:
    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('tab.clockList', {
        url: '/clockList',
        views: {
          'clockList': {
            templateUrl: 'templates/clockList.html',
            controller: 'clockList'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'clockList': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'createEvent'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login')

}]);
