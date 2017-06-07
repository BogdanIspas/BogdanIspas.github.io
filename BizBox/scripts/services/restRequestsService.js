'use strict';

/*
 * Contains a service to communicate with  themoviedb TV API
 */
angular.module('BizBoxApp')
    .constant('API_KEY', '9f47c6cd6108fc998639cbaa64586c23')
    .constant('BASE_URL', 'https://api.themoviedb.org/3')
    .factory('restRequestsService', dataService);

function dataService($http, $log,API_KEY, BASE_URL) {
    var data = {
        'getPremieres': getPremieres,
        'get': get,
        'search': search,
        'getPopular': getPopular,
        'getCast': getCast,
        'getPopularMovies' : getPopularMovies
    };

    function makeRequest(url, params) {
        var requestUrl = BASE_URL + '/' + url + '?api_key=' + API_KEY;
        angular.forEach(params, function(value, key){
            requestUrl = requestUrl + '&' + key + '=' + value;
        });
        return $http({
            'url': requestUrl,
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            },
            'cache': true
        }).then(function(response){
            return response.data;
        }).catch(dataServiceError);
    }
    function getPremieres() {
        //Get first day of the current month
        var date = new Date();
        date.setDate(1);
        return "not implemmented"

    }
    function get(id, mediaType) {
        if (mediaType === "series") {
            return makeRequest('tv/' + id, {'append_to_response' : 'videos,credits'});
        }
        else {
            return makeRequest('movie/' + id, {'append_to_response' : 'videos,credits'});
        }
    }

    function getCast(id) {
        return makeRequest('tv/' + id + '/credits', {});
    }
    function search(query) {
        return makeRequest('search/tv', {query: query}).then(function(data){
            return data.results;
        });
    }
    function getPopular(page) {
        return makeRequest('tv/popular', {page: page}).then(function(data){
            return data;
        });
    }

    function getPopularMovies(page) {
        return makeRequest('movie/popular', {page: page}).then(function(data){
            return data;
        });
    }
    return data;

    function dataServiceError(errorResponse) {
        $log.error('XHR Failed for restRequestsService');
        $log.error(errorResponse);
        return errorResponse;
    }
}
