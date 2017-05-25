angular.module ('BizBoxApp')
.controller ('contentController', ['$scope', '$rootScope','restRequestsService', '$location', 'transformerService', function ($scope, $rootScope,restRequestsService, $location, transformerService){
  $scope.loaded = true;
 var init = function () {
   var page;
   if (!page) {
     page=1;
   }
   $rootScope.path = $location.path().slice(1);
   if ($rootScope.path === 'series') {
       getPopularTVSeries(page);
   }
   else {
      getPopularMovies(page);
   }

}

    getPopularTVSeries = function (page) {
      restRequestsService.getPopular(page)
      .then (function (response){
        $scope.popularShows = transformerService.tvSeriesTransformer(response.results);
        $scope.loaded = false;
        $scope.page = response.page;
        $scope.totalPages = response.total_pages;

      });
    }

    getPopularMovies = function (page) {
      restRequestsService.getPopularMovies(page)
      .then (function (response){
        $scope.popularShows = transformerService.moviesTransformer(response.results);
        $scope.loaded = false;
        $scope.page = response.page;
        $scope.totalPages = response.total_pages;
      });
    }






  init();



}]);
