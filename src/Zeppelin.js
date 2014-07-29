var Zeppelin = function(altitude) {
  Airplane.call(this, 30000, altitude);
  this.$node.attr('src', 'images/zeppelin.png');
};

Zeppelin.prototype = Object.create(Airplane.prototype);
Zeppelin.prototype.constructor = Zeppelin;
