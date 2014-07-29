var DerpyBird = function() {
  this._timeout;
  this._alive = true;
  this._altitude = 300;
  this._speed = 0;
  this._left = 200;
  this._gravity = 1;
  this._flap = -15;
  this._flapping = false;
  this._rotation = 0;
  this.$node = $('<img class="derpybird" />');
  this.$node.attr('src', 'images/DerpyBird.png');
  this.setPosition(this._altitude, this._left);
};

DerpyBird.prototype.move = function() {
  this._speed += this._gravity;
  if (this._speed > 5) {
    this._speed = 5;
  }
  this._altitude += this._speed;
  this.$node.css({
    'top': this._altitude
  });
  this.rotation();
  this._timeout = setTimeout(this.move.bind(this), 10);
};

DerpyBird.prototype.flap = function() {
  if (this._alive) {
    this._speed = this._flap;
  }
};

DerpyBird.prototype.setPosition = function() {
  var styleSettings = {
    'top': this._altitude,
    'left': this._left
  };
  this.$node.css(styleSettings);
};

DerpyBird.prototype.death = function() {
  this._alive = false;
  this.$node.rotate(90);
};

DerpyBird.prototype.rotation = function() {
  if (this._alive) {
    if (this._speed > 0) {
      this.$node.rotate(25);
    } else if (this._speed === 0) {
      this.$node.rotate(0);
    } else {
      this.$node.rotate(-25);
    }
  }
};

