
var utahVotes = angular.module('utahVotes', ['ui.router', 'firebase']);

utahVotes.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
        
    $stateProvider
    
    // Home state

        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })


    // Endorsments and nested views

        .state('endorsements', {
            url: '/endorsements',
            templateUrl: 'partials/endorsements.html'
        })

        .state('endorsements.racetype', {
            url: '/racetype',
            templateUrl: 'partials/racetype.html'
        })

         .state('endorsements.racetype.menu', {
            url: '/menu',
            templateUrl: 'partials/menu.html'
            
        })

         .state('endorsements.racetype.municipal', {
            url: "/municipal ",
            templateUrl: 'partials/municipal.html'

            
        })

         .state('endorsements.racetype.county', {
            url: "/county",
            templateUrl: 'partials/county.html'
            
        })

         .state('endorsements.racetype.city', {
            url: "/city",
            templateUrl: 'partials/city.html'
            
        })

         .state('endorsements.racetype.race', {
            url: "/race",
            templateUrl: 'partials/race.html'
            
        })


    // Lobbying and nested views

        .state('lobbying', {
            url: '/lobbying',
            templateUrl: 'partials/lobbying.html'
        })

        // Nested Endorsements States
       
});