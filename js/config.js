var canvas = document.getElementById('canvas'),
    w = canvas.width,
    h = canvas.height,
    ctx = canvas.getContext('2d');

var animationFrameId = -1,
    gap = 30,
    topSpeed = 10;