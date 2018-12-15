  var ypos, image;
  function parallex() {
    ypos = window.pageYOffset
    image = document.getElementById('image_font')
    image.style.top = ypos * .5 + 'px'
  }
  window.addEventListener('scroll', parallex);
