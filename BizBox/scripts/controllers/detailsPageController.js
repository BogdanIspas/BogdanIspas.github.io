angular.module ('BizBoxApp'.
controller ('detailsPageController', ['$scope','restRequestsService','$routeParams', '$rootScope', '$sce', 'transformerService', '$location',
function ($scope, restRequestsService, $routeParams, $sce, $rootScope, transformerService, $location){
  var id = $routeParams.id.slice(1);
  var path = $location.path();
  var mainBackgroundUrl = 'https://image.tmdb.org/t/p/w1280/';
  $scope.loaded = true;
  var init    = function () {
    if (path.indexOf('series') != -1) {
      getTvShows();
    } else {
      getMovieDetails ();
    }
  }
  
   var getTvShows = function () {
    restRequestsService.get(id)
    .then (function (response){
      var imagePath = mainBackgroundUrl + response.backdrop_path;
      $scope.details    = {
        'name' : response.name,
        'backdrop_path' : imagePath,
        'poster_path' : response.poster_path,
        'overview' : response.overview,
        'genres' : response.genres,
        'number_of_episodes' : response.number_of_episodes,
        'number_of_seasons' : response.number_of_seasons,
        'videos': response.videos.results
      }
      getdominantColor(imagePath);




    } );
  }
  var getMovieDetails = function () {
    restRequestsService.getMovieDetails(id)
    .then (function (response){
      var imagePath = mainBackgroundUrl + response.backdrop_path;
      $scope.details    = {
        'name' : response.title,
        'backdrop_path' : imagePath,
        'poster_path' : response.poster_path,
        'overview' : response.overview,
        'genres' : response.genres,
        'videos': response.videos.results
      }
      $scope.crew = response.credits.crew,
      $scope.cast = response.credits.cast
      getdominantColor(imagePath);

    } );
  };

  // helper methods
  function getdominantColor (imagePath) {
    RGBaster.colors(imagePath, {
      // return up to 30 top colors from the palette
      paletteSize: 30,
      // don't count white
      exclude: [ 'rgb(255,255,255)' ],
      // do something when done
      success: function(payload){
        document.styleSheets[1].cssRules[23].style.backgroundColor = payload.dominant;
        console.log('Dominant color:', payload.dominant);
        $scope.loaded = false;
        $scope.$apply();
      }
    });
  }
  init ();


}])
