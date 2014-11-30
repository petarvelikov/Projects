'use strict';

var bgFilmsCatalog = angular
    .module('bgFilmsCatalog', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/films', {templateUrl: 'partials/films.html', controller: 'FilmListCtrl'});
        $routeProvider.when('/films/:filmId', {templateUrl: 'partials/film.html', controller: 'FilmDetailCtrl'});
        $routeProvider.otherwise({redirectTo: '/films'});
    }]);