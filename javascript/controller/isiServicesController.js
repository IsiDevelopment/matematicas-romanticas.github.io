host = '192.168.0.9';
function doPost(cnf, pars, items, cnfExtra){
  var toUrl = '../phpFiles/';// 'http://' + $('#cnfHomeHost').val() + '/' + $('#cnfHomePath').val() + '/phpFiles/';
  var file = ''
  if(cnf.section == 'articles')
    file = 'managementSecondLevel/managementThirdLevel/articlesManagement.php'
  else if(cnf.section == 'categories')
    file = 'managementSecondLevel/managementThirdLevel/categoriesManagement.php'
  else if(cnf.section == 'users')
    file = 'managementSecondLevel/managementThirdLevel/usersManagement.php'
  else if(cnf.section == 'measurements')
    file = 'managementSecondLevel/managementThirdLevel/measurementManagement.php'
  else if(cnf.section == 'stockArticles')
    file = 'managementSecondLevel/managementThirdLevel/addStockManagement.php'
  else if(cnf.section == 'querySales')
    file = 'querySecondLevel/queryThirdLevel/salesQuery.php'
  else if(cnf.section == 'queryStock')
    file = 'querySecondLevel/queryThirdLevel/articlesQuery.php'
  else if(cnf.section == 'queryUser')
    file = 'querySecondLevel/queryThirdLevel/usersQuery.php'
  else if(cnf.section == 'makeSale')
    file = 'isiModel.php'
  else if(cnf.section == 'checkPermissions')
    file = 'permissions.php'
  else if(cnf.section == 'personalInfoManagement')
    file = 'managementSecondLevel/managementThirdLevel/editInformationManagement.php'
  else if(cnf.section == 'passInfoManagement')
    file = 'managementSecondLevel/managementThirdLevel/changePasswordManagement.php'
  else if(cnf.section == 'backSales')
    file = 'salesSecondLevel/salesThirdLevel/backSale.php'
  $.ajax({
    url: toUrl + file,
    data: {action: cnf.functionRequest, rowsData: pars},
    dataType: 'json',
    type: 'POST',
    success: function (output) {
      if(output == 'nonActiveSession'){
        location.href = '/pos/';// + $('#cnfHomePath').val() + '/'
        if(cnf.closeModal != undefined){
          if(cnf.closeModal == 'true')
            closeLoaderModal()
        }
      }
      else{
        var inMethod = cnf.method.split(' ')
        if(inMethod[0] == 'put'){
          if(output == 'actionSuccessfully'){
            if(items.refresh == 'true')
              eval(items.refreshFunction)
            fadeInSuccess(items.successMsg, items.success)
            setTimeout(function(){fadeOutSuccess(items.success)}, 3500)
          }
          else if(output == 'duplicateKeys'){
            fadeInSuccess(items.errorDuplicate, items.error)
            setTimeout(function(){fadeOutSuccess(items.error)}, 3500)
          }
          else if(output == 'noMatch'){
            fadeInSuccess(items.errorMatch, items.error)
            setTimeout(function(){fadeOutSuccess(items.error)}, 6500)
          }
          else{
            fadeInError(items.errorMsg + ' <b>Error:</b> ' + output, items.error)
            setTimeout(function(){fadeOutError(items.error)}, 3500)
          }
        }
        else if(inMethod[0] == 'get'){
          var a = 0;
          //if(output != 'dataEmpty'){
          if(items.typeItem == 'combos'){
            if(items.ids != ''){
              for(var key in output){
                var ids = items.ids.split(' ')
                for(var item in ids){
                  $('#' + ids[item]).append('<option value=' + output[key].id + '>' + output[key].description + '</option>');
                }
              }
            }
          }
          if(items.typeItem == 'inputs'){
            if(items.ids != ''){
              if(output != 'dataEmpty'){
                for(var key in output){
                  var ids = items.ids.split(' ')
                  var fields = items.responseFiels.split(' ')
                  for(var item in ids){
                    $('#' + ids[item]).val(output[key][fields[item]])
                  }
                }
                if(items.refresh == 'true')
                  eval(items.refreshFunction)
              }
              else{
                var popUp = cnf.popUp.split(' ')
                if(popUp [0] = 'true'){
                  fadeInError(items.errorMsg, items.error)
                  setTimeout(function(){fadeOutError(items.error)}, 3500)
                }
              }
            }
          }
          if(items.typeItem == 'tables'){
            if(items.ids != ''){
              if(cnfExtra != undefined){
                extraPars = {}
                var setPars = ''
                //Table with items such as inputs, buttons, etc and other items
                if(cnfExtra.extra1 == 'inputTable'){
                  switch (cnfExtra.extra2) {
                    case 'function':
                      var numPars = 0
                      if(cnfExtra.extra3 == 'yesInPars'){
                        setPars = 'onchange="' + cnfExtra.extra4 + '('
                        for(i = 6; i < inMethod.length; i++){
                          if((i + 1) < inMethod.length)
                            setPars += inMethod[i] + ','
                          else
                            setPars += inMethod[i] + ')"'
                        }
                      }
                      else
                        setPars = 'onchange="' + cnfExtra.extra4 + '()"'
                    break;
                    default:
                      setPars = ''
                    break;
                  }
                  extraPars.part1 = '<input type="number" style="width: 80%" ' + setPars + ' onClick="this.select()" value="1" class="inputSaleStyle" />'
                }
                if(output != 'dataEmpty'){
                  var table = $('#' + items.ids).DataTable()
                  var contentTable = []
                  var fields = items.responseFiels.split(' ')
                  var parsForRefreshFunction = ''
                  for(var key in output){
                    var contentRow = []
                    for(i = 0; i < fields.length; i++){
                      if(i == cnfExtra.extra5){
                        contentRow.push(extraPars.part1)
                        contentRow.push(output[key][fields[i]])
                        if(items.refresh == 'true'){
                          var refreshNumberPars = items.refreshFunction.split(' ')
                          if(refreshNumberPars.length > 1){
                            for(j = 1; j < refreshNumberPars.length; j++){
                              if((j + 1) == refreshNumberPars.length)
                                parsForRefreshFunction += output[key][refreshNumberPars[j]]
                              else
                                parsForRefreshFunction += output[key][refreshNumberPars[j]] + ', '
                            }
                          }
                        }
                      }
                      else
                        contentRow.push(output[key][fields[i]])
                    }
                    contentTable[key] = contentRow
                    table.row.add(contentTable[0]).draw();
                  }
                  if(items.refresh == 'true'){
                    var callRefreshFunction = items.refreshFunction.split(' ')
                    eval(callRefreshFunction[0] + '(' + parsForRefreshFunction + ')')
                  }
                }
              }//Normal table
              else{
                if(output != 'dataEmpty'){
                  var inc = 0
                  var contentTable = []
                  var fields = items.responseFiels.split(' ')
                  for(var key in output){
                    var contentRow = [output[key][fields[0]]]
                    for(i = 1; i < fields.length; i++){
                      contentRow.push(/*'<span style="background:red">' + */output[key][fields[i]]/* + '</span>'*/)
                    }
                    contentTable[key] = contentRow
                  }
                  var table = $('#' + items.ids).DataTable()
                  table.destroy()
                  createTable(items.ids, contentTable, items.tableSize, items.tableHeader, false)
                }
                else{
                  var table = $('#' + items.ids).DataTable()
                  table.destroy()
                  createTable(items.ids, [], items.tableSize, items.tableHeader, false)
                }
              }
            }
          }
          if(items.typeItem == 'spans'){
            if(output != 'dataEmpty'){
              for(var key in output){
                var ids = items.ids.split(' ')
                var fields = items.responseFiels.split(' ')
                for(var item in ids){
                  $('#' + ids[item]).html(output[key][fields[item]])
                }
              }
              if(items.refresh == 'true')
                eval(items.refreshFunction)
            }
          }
          if(items.typeItem == 'validate'){
            if(output == 'dataEmpty'){
              for(var key in output){
                var ids = items.ids.split(' ')
                var fields = items.responseFiels.split(' ')
                for(var item in ids){
                  $('#' + ids[item]).html(output[key][fields[item]])
                }
              }
              if(items.refresh == 'true')
                eval(items.refreshFunction)
            }else if(output == 'notEnough'){
              var contentModal = {
                title: 'Sin existencia',
                body: 'La existencia de este art&iacute;culos ya no es suficiente para agregarlo a la venta. '
                + 'Por favor, agregue m&aacute;s productos en la secci&oacute;n:<br/>'
                + '<b>Administraci&oacute;n > Surtir art&iacute;culos</b>'
              }
              displayGeneralModal(contentModal)
              if(items.refresh == 'true')
                eval(items.refreshFunctionFailed)
              return;
            }
            else if(output == 'enough'){
              if(items.refresh == 'true')
                eval(items.refreshFunction)
            }
          }
        }
        else if(inMethod[0] == 'permissions'){
          if(items.typeItem == 'secondLevel'){
            if(output != 'dataEmpty'){
              for(var key in output){
                var fields = items.responseFiels.split(' ')
                for(var item in fields){
                  if(cnf.section == 'checkPermissions'){
                    if(output[key][fields[item]] == 'admin')
                      eval(items.adminFunction)
                    else if(output[key][fields[item]] == 'ventas')
                      eval(items.sellerFunction)
                    else if(output[key][fields[item]] == 'desarrollador')
                      eval(items.adminFunction)
                    else
                      eval(items.adminFunction)
                  }
                }
              }
            }
            else{
              if(cnf.section == 'checkPermissions')
                eval(items.adminFunction)
            }
          }
        }
        if(cnf.closeModal != undefined){
          if(cnf.closeModal == 'true')
            closeLoaderModal()
        }
      }
    },
    error: function(){
      if(cnf.method == 'put'){
        fadeInSuccess(items.errorResponse, items.error)
        setTimeout(function(){fadeOutSuccess(items.error)}, 3500)
      }
      else{
        if(cnf.closeModal != undefined){
          if(cnf.closeModal == 'true')
            closeLoaderModal()
        }
      }
    }
  });
}
function typeahead(properties){
  /*var file = ''
  if(properties.section == 'sales')
    file = '/phpFiles/isiModel.php'*/
  $("#" + properties.item1).autocomplete({
    source: function(request, response) {
      $.ajax({
        url: '../phpFiles/isiModel.php',//'http://' + $('#cnfHomeHost').val() + '/' + $('#cnfHomePath').val() + file,
        data: {action: properties.functionRequest, requestValue: request.term},
        dataType: 'json',
        type: 'POST',
        success: function (output) {
          response(output)
        },
        error: function(){
          alert(properties.error)
        }
      });
    },
    minLength: 4,
    select: function( event, ui ) {
      var parIn = String(ui.item.key1)
      eval(properties.functionSelect + "('" + parIn + "')")
      if(properties.clearField == 'true')
        return false
    }
  })
}
function displayGeneralModal(contentModal){
  $('#generalModal').modal('show');
  $('#titleModal').html(contentModal.title)
  $('#bodyModal').html(contentModal.body)
}
function displayModal(contentModal){
  $('#' + contentModal.id).modal('show');
  $('#title').html(contentModal.title)
  $('#body').html(contentModal.body)
}
function displayLoaderModal(){
  $('#loaderModal').modal('show');
}
function closeLoaderModal(){
  $('#loaderModal').modal('hide');
}
function fadeInSuccess(msg, item) {
  $("#" + item).html(msg)
  $("#" + item).fadeIn()
}
function fadeOutSuccess(item) {
  $("#" + item).fadeOut()
}
function fadeInError(error, item) {
  $("#" + item).html(error)
  $("#" + item).fadeIn()
}
function fadeOutError(item) {
  $("#" + item).fadeOut()
}

function cnfPage(pars){
  if(pars.hide == 'true'){
    var ids = pars.items.split(' ')
    for(var item in ids){
      $('#' + ids[item]).hide()
    }
  }
}
