var mover = new Mover();

function draw()
{
    ctx.save();
    ctx.restore();
    ctx.clearRect(0, 0, w, h);

    mover.update();
    mover.display();
    mover.checkEdges();

    animationFrameId = requestAnimationFrame(draw);
}

window.onload = function()
{
    draw();
};
