var score = 0;
var scoreTimeout;
var $score = $('.scoreValue');
var start = false;
window.planeConstructors = [BomberPlane, JetPlane, Zeppelin, BiPlane];
derpyBird = new DerpyBird();

$(document).ready(function() {

  $('body').append(derpyBird.$node);

  $(window).on('keydown', function(event) {
    if (start) {
      if (event.keyCode === 32) {
        window.derpyBird.flap(derpyBird);
      }
    } else {
      start = true;
      $('div.instructions').hide();
      window.derpyBird.move();
      generatePlane();
      scoreFunction();
    }
  });

  setInterval(function() {
    var collision = $('.derpybird').collision('.plane');
    if(collision.hasClass('plane')) {
      window.derpyBird.death();
      gameOver();
    }
    if (window.derpyBird._altitude > 870 || window.derpyBird._altitude < 0) {
      window.derpyBird.death();
      gameOver();
    }
    if (window.derpyBird._altitude > 870) {
      window.clearTimeout(window.derpyBird._timeout);
    }
  }, 100)
});

var scoreFunction = function() {
  $score.text(++score);
  scoreTimeout = setTimeout(scoreFunction, 1000);
};

var generatePlane = function() {
  var altitude = Math.random() * 700;
  var planeType = Math.floor(Math.random() * window.planeConstructors.length);
  var plane = new window.planeConstructors[planeType](altitude);
  setTimeout(generatePlane, Math.random() * 3000);
  $('body').append(plane.$node);
};

var gameOver = _.once(function() {
  window.clearTimeout(scoreTimeout);
  $('body').animate({ 'opacity': 0 }, 100, 'swing', function() {
    $('body').animate({'opacity': 1 });
  });
  $('body').append('<span class="gameover">Game Over</span>')
});
