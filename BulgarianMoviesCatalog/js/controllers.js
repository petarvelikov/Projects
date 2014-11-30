'use strict';

bgFilmsCatalog.controller('FooterCtrl', function FooterCtrl($scope) {
    $scope.footer = 'Каталог на български филми. Петар Великов. Всички права запасени.';
});

bgFilmsCatalog.controller('FilmListCtrl', function FilmListCtrl($scope, $http) {
    $http.get('/films/films.json').success(function (data) {
            $scope.films = data;
    });
});


bgFilmsCatalog.controller('FilmDetailCtrl', function FilmDetailCtrl($scope, $routeParams, $http) {
    $http.get('films/' + $routeParams.filmId + '.json').success(function(data) {
        $scope.film = data;
    });
});