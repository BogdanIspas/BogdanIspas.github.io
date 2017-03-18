angular.module ('BizBoxApp')
    .controller ('detailsPageController', ['$scope', 'showService','$routeParams', '$rootScope', '$sce', 'transformerService', '$location',
    function ($scope, showService, $routeParams, $sce, $rootScope, transformerService, $location){
    var id = $routeParams.id.slice(1);
    var path = $location.path();
var mainBackgroundUrl = 'https://image.tmdb.org/t/p/w1280/';
    $scope.loaded = true;
    var init  = function () {
      if (path.indexOf('series') != -1) {
        getTvShows();
      } else {
        getMovieDetails ();
      }
    }

      var getTvShows = function () {
      showService.get(id)
          .then (function (response){
            
              $scope.details  = {
                 'name' : response.name,
                 'backdrop_path' : mainBackgroundUrl + response.backdrop_path,
                 'poster_path' : response.poster_path,
                 'overview' : response.overview,
                 'genres' : response.genres,
                 'number_of_episodes' : response.number_of_episodes,
                 'number_of_seasons' : response.number_of_seasons,
                 'videos': response.videos.results
              }
                $scope.loaded = false;
          } );
        }
    var getMovieDetails = function () {
      showService.getMovieDetails(id)
          .then (function (response){
              $scope.details  = {
                 'name' : response.title,
                 'backdrop_path' : mainBackgroundUrl+response.backdrop_path,
                 'poster_path' : response.poster_path,
                 'overview' : response.overview,
                 'genres' : response.genres,
                 'videos': response.videos.results

               }
                 $scope.loaded = false;
          } );
    };




init ();


  }])
