var JetPlane = function(altitude) {
  Airplane.call(this, 3000, altitude);
  this.$node.addClass('jetplane');
  this.$node.attr('src', 'images/JetPlane.png');
};

JetPlane.prototype = Object.create(Airplane.prototype);
JetPlane.prototype.constructor = JetPlane;

