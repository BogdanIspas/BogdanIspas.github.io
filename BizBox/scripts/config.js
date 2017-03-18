angular.module('BizBoxApp').config (['$routeProvider', '$locationProvider', '$sceProvider',
  function ($routeProvider, $locationProvider, $sceProvider){
  $locationProvider.hashPrefix("");
  $routeProvider.
  when ("/movies", {
      templateUrl : "./templates/content.html",
      controller : "contentController"
  }).
  when ("/series", {
      templateUrl : "./templates/content.html",
      controller : "contentController"
  }).
  when ("/landingPage", {
      templateUrl : "./templates/landingPage.html",
      controller : "landingPageController"

  }).
  when ("/movies/detailsPage:id", {
     templateUrl : "./templates/detailsPage.html",
     controller : "detailsPageController"
   }).
   when ("/series/detailsPage:id", {
      templateUrl : "./templates/detailsPage.html",
      controller : "detailsPageController"
    }).
    otherwise ({
        redirectTo:"/landingPage"
      });



}]);
