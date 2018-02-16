var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

var gesturedZone = document.getElementById('gesturedZone');

gesturedZone.addEventListener('touchstart', function(event) {
    console.log('start');
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gesturedZone.addEventListener('touchend', function(event) {
    console.log('end');
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesure();
}, false);

function handleGesure() {
  if (touchendX <= touchstartX) {
      alert('Swiped left');
      document.getElementById('object').style.display = 'none';
      document.getElementById('camera').style.display = 'block';
  }

  if (touchendX >= touchstartX) {
      alert('Swiped right');
      document.getElementById('object').style.display = 'block';
      document.getElementById('camera').style.display = 'none';
  }

  if (touchendY <= touchstartY) {
      alert('Swiped up');
  }

  if (touchendY >= touchstartY) {
      alert('Swiped down');
  }

  if (touchendY === touchstartY) {
      alert('Tap');
  }
}
