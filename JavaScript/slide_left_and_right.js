$(document).ready(function(){
    $('#ik').addClass('c')
    $('#ik').removeClass('d')
}
);
function right_slide(){
$(window).scroll(function(){
    $('#ik').addClass('d')
    $('#ik').removeClass('c')
})
}
function left_slide(){
$(window).scroll(function(){
    $('#ik').addClass('c')
    $('#ik').removeClass('d')
})
}
$(document).scroll(function() {
  if ( $(document).scrollTop() > 300) {
  	right_slide()
  } else {
  	left_slide()
  }
});
function redirect() {
  location.replace("https://www.w3schools.com")
}
