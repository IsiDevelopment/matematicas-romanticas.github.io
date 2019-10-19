$(document).ready(function() {
  $('#prod1').on('click', function() {
    displayGeneralModal({title: 'Detalles del producto', body: 'Estos son los detalles<br/><img src="images/categories/food.png />"'})
  });
  showCategories([
    {imageName: '1', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '2', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '1', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '2', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '1', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '2', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '1', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '2', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '1', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '2', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '1', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'},
    {imageName: '2', imageType: 'jpg', price: '100.00', description: 'Nombre del art&iacute;culo', buttonDescription: 'M&aacute;s informaci&oacute;n'}
  ], {noImages: 12})
})
function hola(){
  displayGeneralModal(
    {title: 'Detalles de art&iacute;culo seleccionado',
    body: '<h2>Aqu&iacute; se pueden escribir los beneficios o la informaci&oacute;n nutrimental del producto.</h2><br/>' +
      '<h3>O lo que se desee agregar (im&aacute;genes, texto, formularios, etc).' +
      '<br/>Incluso se puede seleccionar para realizar la venta en l&iacute;nea.</h3>'}
  )
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
  $('#showHortaliza').html(htmlContent)
}

function addDataCol(data){
  var columnImage = '' +
    '<div class="column4_space textCenter move bgWhite borderRounded4">' +
      '<br/>' +
      '<img src=\"images/hortaliza/' + data.imageName + '.' + data.imageType + '\" width=\"90%\"/>' +
      '<br/><br/>' +
      '<div class="textCenter">' +
        '<span class="textPriceArticle">$ ' + data.price + ' MXN</span><br/>' +
        '<span class="textArticleInformation">' + data.description + '</span>' +
        '<br/><br/>' +
        '<button class="toSee" onclick="hola()">' + data.buttonDescription + '</button>' +
      '</div>' +
      '<br/>' +
    '</div>';
  return columnImage;
}
