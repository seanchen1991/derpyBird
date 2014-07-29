var Airplane = function(speed, altitude) {

  this._speed = speed;   //time it takes to cross the screen
  this._altitude = altitude;
  this.$node = $('<img class="plane" />');
  this.setPosition(altitude);
  this.move();
};

Airplane.prototype.move = function() {
  this.$node.animate({ left: -1000 }, this._speed, 'linear');
};

Airplane.prototype.setPosition = function(top) {
  var styleSettings = {
    'top': top,
    'left': 1800
  };
  this.$node.css(styleSettings);
};


