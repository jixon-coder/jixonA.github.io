
  var container = document.getElementById('container');
  var cube = document.querySelector('.cube');
  var startX, startY, currentX = 0, currentY = 0;

  container.addEventListener('touchstart', function(event) {
    startX = event.touches[0].pageX - currentX;
    startY = event.touches[0].pageY - currentY;
  });

  container.addEventListener('touchmove', function(event) {
    currentX = event.touches[0].pageX - startX;
    currentY = event.touches[0].pageY - startY;
    cube.style.transform = 'rotateX(' + currentY + 'deg) rotateY(' + currentX + 'deg) rotateZ(-155deg)';
  });

