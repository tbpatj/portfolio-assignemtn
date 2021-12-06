var Vector = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  };
  
  // return the angle of the vector in radians
  Vector.prototype.getDirection = function() {
      return Math.atan2(this.y, this.x);
  };
  
  // set the direction of the vector in radians
  Vector.prototype.setDirection = function(direction) {
      var magnitude = this.getMagnitude();
    this.x = Math.cos(angle) * magnitude;
    this.y = Math.sin(angle) * magnitude;
  };
  
  // get the magnitude of the vector
  Vector.prototype.getMagnitude = function() {
      // use pythagoras theorem to work out the magnitude of the vector
      return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  
  // set the magnitude of the vector
  Vector.prototype.setMagnitude = function(magnitude) {
      var direction = this.getDirection(); 
      this.x = Math.cos(direction) * magnitude;
      this.y = Math.sin(direction) * magnitude;
  };
  
  // add two vectors together and return a new one
  Vector.prototype.add = function(v2) {
      return new Vector(this.x + v2.x, this.y + v2.y);
  };
  
  // add a vector to this one
  Vector.prototype.addTo = function(v2) {
      this.x += v2.x;
    this.y += v2.y;
  };
  
  // subtract two vectors and reutn a new one
  Vector.prototype.subtract = function(v2) {
      return new Vector(this.x - v2.x, this.y - v2.y);
  };
  
  // subtract a vector from this one
  Vector.prototype.subtractFrom = function(v2) {
      this.x -= v2.x;
    this.y -= v2.y;
  };
  
  // multiply this vector by a scalar and return a new one
  Vector.prototype.multiply = function(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  };
  
  // multiply this vector by the scalar
  Vector.prototype.multiplyBy = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  };
  
  // scale this vector by scalar and return a new vector
  Vector.prototype.divide = function(scalar) {
    return new Vector(this.x / scalar, this.y / scalar);
  };
  
  // scale this vector by scalar
  Vector.prototype.divideBy = function(scalar) {
    this.x /= scalar;
    this.y /= scalar;
  };
  
  // Aliases
  Vector.prototype.getLength = Vector.prototype.getMagnitude;
  Vector.prototype.setLength = Vector.prototype.setMagnitude;
  
  Vector.prototype.getAngle = Vector.prototype.getDirection;
  Vector.prototype.setAngle = Vector.prototype.setDirection;
  
  // Utilities
  Vector.prototype.copy = function() {
    return new Vector(this.x, this.y);
  };
  
  Vector.prototype.toString = function() {
    return 'x: ' + this.x + ', y: ' + this.y;
  };
  
  Vector.prototype.toArray = function() {
    return [this.x, this.y];
  };
  
  Vector.prototype.toObject = function() {
    return {x: this.x, y: this.y};
  };

  // dot product of two vectors
Vector.prototype.dotProduct = function(v2) {
	return this.x * v2.x + this.y *v2.y;
}

// normalize a given vector
Vector.prototype.normalize = function(){
    let m = this.getMagnitude();
	return new Vector(this.x/m, this.y/m);
}

// return the angle of the vector in degrees
Vector.prototype.getDirectionD = function() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
};

// set the direction of the vector in degrees
Vector.prototype.setDirectionD = function(directionD) {
    var angleD = directionD;
    var magnitude = this.getMagnitude();
    this.x = Math.cos(angleD * 180 / Math.PI) * magnitude;
    this.y = Math.sin(angleD * 180 / Math.PI) * magnitude;
};

Vector.prototype.getPointInside = function(point1, point2, point3){
    let v1 = new Vector(point1.x - this.x, point1.y - this.y);
    let v2 = new Vector(point2.x - this.x, point2.y - this.y);
    let v3 = new Vector(point3.x - this.x, point3.y - this.y);
    let p12 = new Vector(point1.x - point2.x, point1.y - point2.y);
    let p23 = new Vector(point2.x - point3.x, point2.y - point3.y);
    let p31 = new Vector(point3.x - point1.x, point3.y - point1.y);

    console.log("v1: " + v1.dotProduct(p12));
    console.log("v2: " + v2.dotProduct(p23));
    console.log("v3: " + v3.dotProduct(p31));

}
  
  // To add
  // Scale
  // Normalise
  // Dot?