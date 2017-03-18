'use strict';

/*
 * Contains a service to communicate with  themoviedb TV API
 */
angular.module('BizBoxApp')
    .factory('transformerService', transformerService);

function transformerService() {
    var transformedData = {
        'tvSeriesTransformer': tvSeriesTransformer,
        'moviesTransformer': moviesTransformer
    };

    function tvSeriesTransformer (items) {
        var transformedItems = [];
        var transformedItem;

        for (var i = 0; i < items.length; i++) {
            transformedItem = {};
            transformedItem.name = items[i].name;
            transformedItem.releaseDate = items[i].first_air_date;
            transformedItem.originCountry = items[i].origin_country;
            transformedItem.id = items[i].id;
            transformedItem.backdropPath = items[i].backdrop_path;
            transformedItem.posterPath = items[i].poster_path;
            transformedItem.popularity = items[i].popularity;
            transformedItem.originCountry = items[i].origin_country[0];
            transformedItem.genre_ids = items[i].genre_ids;
            transformedItem.vote_average = items[i].vote_average;
            transformedItems.push (transformedItem);
          }
        return transformedItems;
      }
    function moviesTransformer (items) {
        var transformedItems = [];
        var transformedItem;
        for (var i = 0; i < items.length; i++) {
            transformedItem ={};
            transformedItem.name = items[i].title;
            transformedItem.releaseDate = items[i].release_date;
            transformedItem.originCountry = items[i].origin_country;
            transformedItem.id = items[i].id;
            transformedItem.backdropPath = items[i].backdrop_path;
            transformedItem.posterPath = items[i].poster_path;
            transformedItem.popularity = items[i].popularity;
            transformedItem.originCountry = items[i].origin_country;
            transformedItem.genreIds = items[i].genre_ids;
            transformedItem.voteAverage = items[i].vote_average;
            transformedItems.push (transformedItem);
        }
        return transformedItems;
      }


    return transformedData;


}
