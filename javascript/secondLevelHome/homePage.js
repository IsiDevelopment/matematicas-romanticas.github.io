$(document).ready(function() {
  $('#prod1').on('click', function() {
    displayGeneralModal({title: 'Detalles del producto', body: 'Estos son los detalles<br/><img src="images/categories/food.png />"'})
  });
  showCategories([
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos1'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos2'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos3'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos4'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos5'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos6'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos7'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos8'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos6'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos7'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos8'},
    {imageName: 'food', imageType: 'png', categoryDescription: 'breve descrioion de este pedo', buttonDescription: 'Veamos9'}
  ], {noImages: 12})
})
function hola(){
  displayGeneralModal({title: 'Prueba', body: 'Estos son los detalles<br/>Image:<br/><img src="images/categories/food.png" />'})
}

function showCategories(contentCols, cnf){
  var htmlContent = '';
  var startCols = '<div class="row">';
  var endCols = '</div><br/><br/>';
  var columnSpace = '<div class="column2_5p">&nbsp;</div>';

  for(i = 0; i < cnf.noImages; i++){
    htmlContent += ((i % 4 == 0) ? startCols : '');
    htmlContent += columnSpace +
      addDataCol(contentCols[i]);
    htmlContent += ((i + 1) % 4 == 0) ? endCols : '';
  }
  $('#showCategories').html(htmlContent)
}

function addDataCol(data){
  var columnImage = '' +
    '<div class="column4_space textCenter move bgWhite borderRounded4">' +
      '<br/>' +
      '<img src="images/categories/' + data.imageName + '.' + data.imageType + '" />' +
      '<br/><br/>' +
      '<div class="textCenter">' +
        '<span>' + data.categoryDescription + '</span>' +
        '<br/><br/>' +
        '<button class="toSee" onclick="hola()">' + data.buttonDescription + '</button>' +
      '</div>' +
      '<br/>' +
    '</div>';
  return columnImage;
}
