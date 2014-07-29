var BomberPlane = function(altitude) {
  Airplane.call(this, 15000, altitude);
  this.$node.attr('src', 'images/BomberPlane.png');
};

BomberPlane.prototype = Object.create(Airplane.prototype);
BomberPlane.prototype.constructor = BomberPlane;
