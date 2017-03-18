angular.module('BizBoxApp')
       .filter('unsafe', ['$sce', function ($sce) {
           return function(videoKey) {
              return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + videoKey+"?vq=hd720&html5:1");
    };
}]);
