var JetPlane = function(altitude) {
  Airplane.call(this, 3000, altitude);
  this.$node.attr('src',);
}

JetPlane.prototype = Object.create(Airplane.prototype);
JetPlane.prototype.constructor = JetPlane;
