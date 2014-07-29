var BiPlane = function(altitude) {
  Airplane.call(this, 5000, altitude);
  this.$node.attr('src', 'images/BiPlane.gif');
};

BiPlane.prototype = Object.create(Airplane.prototype);
BiPlane.prototype.constructor = BiPlane;
