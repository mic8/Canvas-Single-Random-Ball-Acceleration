function Mover()
{
    this.position = new Vector(w / 2, h / 2);
    this.velocity = new Vector(0, 0);

    this.acceleration = null;
}

Mover.prototype.update = function()
{
    this.acceleration = Vector.random2d();
    this.acceleration.mult(Math.floor(Math.random() * 2));

    this.velocity.add(this.acceleration);
    this.velocity.limit(topSpeed);

    this.position.add(this.velocity);
};

Mover.prototype.display = function()
{
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, gap, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};

Mover.prototype.checkEdges = function()
{
    if(this.position.x > (w + gap)) {
        this.position.x = -gap;
    } else if(this.position.x < 0) {
        this.position.x = w - gap;
    }

    if(this.position.y > (h + gap)) {
        this.position.y = -gap;
    } else if(this.position.y < 0) {
        this.position.y = h - gap;
    }

    console.log(this.position);
};