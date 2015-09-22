
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
         .state('endorsements.addelection', {
            url: '/addelection',
            templateUrl: 'partials/addelection.html'
            
        })
         .state('endorsements.rankings', {
            url: '/rankings',
            templateUrl: 'partials/rankings.html'
            
        })
        .state('endorsements.racetype.entry', {
            url: '/entry',
            templateUrl: 'partials/entry.html'
            
        })




    // Lobbying and nested views

        .state('lobbying', {
            url: '/lobbying',
            templateUrl: 'partials/lobbying.html'
        })

        // Nested Endorsements States
       
});