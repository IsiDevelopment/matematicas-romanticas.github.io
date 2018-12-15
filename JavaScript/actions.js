  function appear() {
    $('#label').show()
  }

  function hideL() {
    $('#label').hide()
  }

  function h() {
    var values = "Nuevo valor"
    $('#c').val('<%= s%>' + ' Vl')
    $('#label').val('Nuevo Valor')
  }

  function myFunction() {
      var x = $("#myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }
