$(document).ready(function() {
  $('#divPage').load('view/secondLevelHome/homePage.html')
  $('#modals').load('view/modals/login.html')
  $('#but1Header').addClass('butHeader')
  $('#but1Header').addClass('active')
  $('#but2Header, #but3Header, #but4Header, #but5Header, #but6Header, #but7Header').addClass('butHeader')
});

function but1Header(){
  $('#but1Header').addClass('active')
  $('#but2Header, #but3Header, #but4Header, #but5Header, #but6Header, #but7Header').removeClass('active')
  $('#but1Header').addClass('butHeader')
  $('#divPage').load("view/secondLevelHome/homePage.html");
}
function but2Header(){
  $('#but2Header').addClass('active')
  $('#but1Header, #but3Header, #but4Header, #but5Header, #but6Header, #but7Header').removeClass('active')
  $('#but2Header').addClass('butHeader')
  //$('#divPage').load("view/secondLevelProducts/superalimentos.html");
  window.location.href = 'http://127.0.0.1/matematicas-romanticas.github.io/#offer'
}
function but3Header(){
  $('#but3Header').addClass('active')
  $('#but1Header, #but2Header, #but4Header, #but5Header, #but6Header, #but7Header').removeClass('active')
  $('#but3Header').addClass('butHeader')
  $('#divPage').load("view/secondLevelProducts/hortaliza.html");
}
function but4Header(){
  $('#but4Header').addClass('active')
  $('#but1Header, #but3Header, #but2Header, #but5Header, #but6Header, #but7Header').removeClass('active')
  $('#but4Header').addClass('butHeader')
  $('#divPage').load("view/secondLevelProducts/baguette.html");
}
function but5Header(){
  $('#but5Header').addClass('active')
  $('#but1Header, #but3Header, #but4Header, #but2Header, #but6Header, #but7Header').removeClass('active')
  $('#but5Header').addClass('butHeader')
  $('#divPage').load("view/secondLevelProducts/panaderia.html");
}
function but6Header(){
  $('#but6Header').addClass('active')
  $('#but1Header, #but3Header, #but4Header, #but5Header, #but2Header, #but7Header').removeClass('active')
  $('#but6Header').addClass('butHeader')
  $('#divPage').load("view/secondLevelProducts/cafeteria.html");
}
function but7Header(){
  /*$('#but7Header').addClass('active')
  $('#but1Header, #but3Header, #but4Header, #but5Header, #but6Header, #but2Header').removeClass('active')
  $('#but7Header').addClass('butHeader')*/
  displayModal({id: 'loginModal', body: 'test', title: 'test'})
  //$('#divPage').load("view/secondLevelUs/us.html");
}
function butSecond1Header(){
  $('#but3Header').addClass('active')
  $('#but1Header, #but2Header, #but4Header, #but5Header, #but6Header, #but2Header').removeClass('active')
  $('#but3Header').addClass('butHeader')
  $('#divPage').load("view/secondLevelAlianza/alianza.html");
}
function butSecond2Header(){
  $('#but3Header').addClass('active')
  $('#but1Header, #but2Header, #but4Header, #but5Header, #but6Header, #but2Header').removeClass('active')
  $('#but3Header').addClass('butHeader')
  $('#divPage').load("view/secondLevelMegazine/megazine.html");
}
function butSecond3Header(){
  $('#but3Header').addClass('active')
  $('#but1Header, #but2Header, #but4Header, #but5Header, #but6Header, #but2Header').removeClass('active')
  $('#but3Header').addClass('butHeader')
  $('#divPage').load("view/secondLevelVideos/videos.html");
}
function butSecond4Header(){
  $('#but3Header').addClass('active')
  $('#but1Header, #but2Header, #but4Header, #but5Header, #but6Header, #but2Header').removeClass('active')
  $('#but3Header').addClass('butHeader')
  $('#divPage').load("view/secondLevelAccount/account.html");
}
