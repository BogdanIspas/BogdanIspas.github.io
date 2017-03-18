angular.module ('BizBoxApp')
.controller ('contentController', ['$scope', '$rootScope','restRequestsService', '$location', 'transformerService', function ($scope, $rootScope,restRequestsService, $location, transformerService){
  $scope.loaded = true;
 var init = function () {
   $rootScope.path = $location.path().slice(1);
   if ($rootScope.path === 'series') {
       getPopularTVSeries();
   }
   else {
      getPopularMovies();
   }

}

    getPopularTVSeries = function () {
      restRequestsService.getPopular()
      .then (function (response){
        $scope.popularShows = transformerService.tvSeriesTransformer(response);
        $scope.loaded = false;
        $scope.page = response.page;
        $scope.totalPages = response.total_pages;

      });
    }

    getPopularMovies = function () {
      restRequestsService.getPopularMovies()
      .then (function (response){
        $scope.popularShows = transformerService.moviesTransformer(response);
        $scope.loaded = false;
        $scope.page = response.page;
        $scope.totalPages = response.total_pages;
      });
    }






  init();



}]);
