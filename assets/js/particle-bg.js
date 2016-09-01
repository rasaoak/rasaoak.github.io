document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#C0C0C0',
    lineColor: '#E0E0E0',
    lineWidth: '0.5',
    particleRadius: 3,
    minSpeedX: -0.25,
    maxSpeedX: 0.25,
    minSpeedY: 0.0,
    maxSpeedY: 0.2,
    density: 6000,
    proximity: 150,
    parallax: true,
    parallaxMultiplier: 10,
    curvedLines: false
  });
  //var intro = document.getElementById('intro');
  //intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);