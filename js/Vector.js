function Vector(x, y)
{
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function(v)
{
    this.x = this.x + v.x;
    this.y = this.y + v.y;
};

Vector.prototype.sub = function(v)
{
    this.x = this.x - v.x;
    this.y = this.y - v.y;
};

Vector.prototype.mult = function(n)
{
    this.x = this.x * n;
    this.y = this.y * n;
};

Vector.prototype.div = function(n)
{
    this.x = this.x / n;
    this.y = this.y / n;
};

Vector.prototype.mag = function()
{
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.normalize = function()
{
    var mag = this.mag();

    if(mag != 0) {
        this.div(mag);
    }
};

Vector.prototype.limit = function(n)
{
    var mag = this.mag();

    if(mag > n) {
        this.normalize();
        this.mult(n);
    }
};

Vector.random2d = function()
{
    return new Vector(Math.floor(Math.random() * w) - w, Math.floor(Math.random() * h) - h);
};

Vector.div = function(target, curr)
{
    var dx = target.x - curr.x,
        dy = target.y - curr.y;

    return new Vector(dx, dy);
};