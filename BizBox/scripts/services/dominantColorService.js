angular.module ('BizBoxApp')
    .factory ('dominantColorService', dominantColorService);

function dominantColorService  {
    var dominantColorService = {
      'getDominantColor' : getDominantColor;
    }
}

function getDominantColor (imageUrl) {
  var color =   require('dominant-color'),

  color (imageUrl, {format: rgb}, function (err, color){
      console.log (color)
  })

}
