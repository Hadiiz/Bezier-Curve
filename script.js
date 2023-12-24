var canvas = document.getElementById("artwork");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

canvas.addEventListener('click', function(event){
    let mouse_x = event.clientX;
    let mouse_y = event.clientY;
    create_circle(mouse_x, mouse_y, 10); 
}, false)



function create_circle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();
}

