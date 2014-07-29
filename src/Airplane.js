var Airplane = function(speed, altitude) {

  this._speed = speed;   //time it takes to cross the screen
  this._altitude = altitude;
  this.$node = $('<img class="plane" />')
};

Airplane.prototype.move = function() {
  this.$node.animate({ left: 0% }, this._speed, 'linear');
};
