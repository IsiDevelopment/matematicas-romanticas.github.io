function createSaleButtons(){
  var butDetail = [
    'Realizar una venta',
    'Devoluci&oacute;n'
  ]
  var firstPage = 'salesSecondLevel/salesThirdLevel/makeSale.html'
  var pageTitle = 'Ventas'
  var nameButtonId = "butSale"
  var pages = [
    'salesSecondLevel/salesThirdLevel/makeSale.html',
    'salesSecondLevel/salesThirdLevel/backSale.html'
  ]
  var detail = 'Sales'
  //THE VARIABLES ABOVE WILL BE ASSIGNED WITH A REQUEST TO THE SERVER
  $('#secondLevel' + detail).html(createDynamicButtons(butDetail, pageTitle,
    nameButtonId))
  $('#thirdLevel' + detail).load(firstPage)
  buttonAction(pages, nameButtonId, detail)
}

function createSettingsButtons(){
  /*
  Cambiar contrasena de usuario
  Cambiar informacion de usuario
  */

}

function createButtons(butNames, filePages, pars){
  $('#secondLevel' + pars.divDetail).html(createDynamicButtons(butNames, pars.pageTitle,
    pars.buttonId));
  $('#thirdLevel' + pars.divDetail).load(pars.firstPage);
  buttonAction(filePages, pars.buttonId, pars.divDetail);
}

function createManagementButtons(){
  var butDetail = [
    'Art&iacute;culos',
    'Categor&iacute;as',
    'Usuarios',
    'Unidad de Medida'
  ];
  var firstPage = 'managementSecondLevel/managementThirdLevel/articlesManagement.html';
  var pageTitle = 'Administraci&oacute;n';
  var nameButtonId = "butSale";
  var pages = [
    'managementSecondLevel/managementThirdLevel/articlesManagement.html',
    'managementSecondLevel/managementThirdLevel/categoriesManagement.html',
    'managementSecondLevel/managementThirdLevel/usersManagement.html',
    'managementSecondLevel/managementThirdLevel/measurementManagement.html'
  ];
  var detail = 'Management';
  //THE VARIABLES ABOVE WILL BE ASSIGNED WITH A REQUEST TO THE SERVER
  $('#secondLevel' + detail).html(createDynamicButtons(butDetail, pageTitle,
    nameButtonId));
  $('#thirdLevel' + detail).load(firstPage);
  buttonAction(pages, nameButtonId, detail);
}

function what(){alert('Lets see if it works')}

function createDynamicButtons(butDetail, pageTitle, nameButtonId){
  var buttons = "<br/><span style='text-align: center !important; font-size: 25px;'>" + pageTitle + "</span><br/><br/>"
  var i = 0
  butDetail.forEach(function(name){
    buttons += "<button class='butSecondLevel' id='" + nameButtonId +
    i + "'>" + name + '</button><br/>'
    i += 1
  })
  return buttons
}
function buttonAction(pages, nameButtonId, detail){
  var i = 0
  $('#' + nameButtonId + '0').removeClass('butSecondLevel')
	$('#' + nameButtonId + '0').addClass('butSecondLevelActive')
  pages.forEach(function(element){
    $('#' + nameButtonId + i).click(function() {
      $('#thirdLevel' + detail).load('' + element)
      $(getNonSecuentialButton(
        pages.length, i, nameButtonId)).removeClass('butSecondLevelActive')
      $(getNonSecuentialButton(
        pages.length, i, nameButtonId)).addClass('butSecondLevel')
      $('#' + this.id).removeClass('butSecondLevel')
      $('#' + this.id).addClass('butSecondLevelActive')
    });
    i += 1
  })
}
function getNonSecuentialButton(size, inc, nameButtonId){
  var arr = []
  var buttonId = ''
  var tmp = 0
  for(var i = 0; i < size; i++){
    if(i != inc){
      arr[tmp] = i
      tmp += 1
    }
  }
  for(var i = 0; i < arr.length; i++){
    buttonId += '#' + nameButtonId + arr[i]
    if(i != (arr.length - 1))
      buttonId += ','
  }
  return buttonId
}
/*THE NEXT CODE CREATES A TABLE*/
function initTable(nameTable, inLengthMenu, inHeader, inId,
  inEmptyTable, hidden){
  var table = $('#' + nameTable).DataTable({
    pageLength: inLengthMenu,
    columns: inHeader,
    oLanguage: {
        sEmptyTable: inEmptyTable,
        sLoadingRecords: "Please wait - loading..."
    },
    columnDefs: hidden
  });
  table.clear().draw()
}
function initTableSingleSelect(nameTable, inLengthMenu, inHeader, inId,
  inEmptyTable, hidden){
  var table = $('#' + nameTable).DataTable({
    pageLength: inLengthMenu,
    columns: inHeader,
    oLanguage: {
        sEmptyTable: inEmptyTable,
        sLoadingRecords: "Please wait - loading..."
    },
    select:{
      style: 'single'
    }
  });
  table.clear().draw()
}
function initTableCheckbox(nameTable, inLengthMenu, inHeader, inId,
  inEmptyTable, hidden){
  var table = $('#' + nameTable).DataTable({
    ordering: false,
    lengthMenu: inLengthMenu,
    columns: inHeader,
    oLanguage: {
        sEmptyTable: inEmptyTable,
        sLoadingRecords: "Please wait - loading..."
    },
    columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
      } ],
    select: {
        style:    'os',
        selector: 'td:first-child'
    }
  });
  table.clear().draw()
}
function createTable(nameTable, inData, inLengthMenu, inHeader, inId, hidden){
  var table = $('#' + nameTable).DataTable({/*
    order: [[ 1, 'asc' ]],*/
    data: inData,
    pageLength: inLengthMenu,
    //lengthMenu: inLengthMenu,
    columns: inHeader,
    columnDefs: hidden
  });
  if(inId){
    table.on( 'order.dt search.dt', function () {
        table.column(0, {search:'applied', order:'applied'}).nodes().each(
          function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
  }
}
function createTableCheck(nameTable, inData, inLengthMenu, inHeader, inId){
  var table = $('#' + nameTable).DataTable({/*
    order: [[ 1, 'asc' ]],*/
    data: inData,
    lengthMenu: inLengthMenu,
    columns: inHeader,
    columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
      } ],
    select: {
        style:    'os',
        selector: 'td:first-child'
    }
  });
  if(inId){
    table.on( 'order.dt search.dt', function () {
        table.column(0, {search:'applied', order:'applied'}).nodes().each(
          function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
  }
}
