const canvas = document.getElementById('pong')
const context = canvas.getContext('2d');

// context.fillStyle = 'black';
// context.fillRect(100, 200, 50, 75);

function drawRect(x, y, w, h, color) {
    context.fillStyle = color;
    context.fillRect(x, y, w, h)
}

function drawCircle(x, y, r, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}

function drawText(text, x, y, color) {
    context.fillStyle = color;
    context.font = '75px open sans';
    context.fillText(text, x, y);
}

const user = {
    x: 0,
    y: canvas.height/2 - 100/2, 
    width: 10,
    height: 100,
    score: 0,
    color: 'white'
}
const com = {
    x: 590,
    y: canvas.height/2 - 100/2, 
    width: 10,
    height: 100,
    score: 0,
    color: 'white'
}
const net = {
    x: canvas.width/2 - 1,
    y: 0,
    width: 2,
    height: 10,
    color: 'white'
}

const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    color: 'white'
}

function drawNet(){
    for(let i = 0; i <= canvas.height; i += 15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
        console.log(i)
    }
}


function render() {
    drawText(user.score, canvas.width/4, canvas.height/5, 'white');
    drawText(com.score, 3*canvas.width/4, canvas.height/5, 'white');
    drawNet();
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(com.x, com.y, com.width, com.height, com.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color)
}

// drawRect(user.x, user.y, user.width, user.height, user.color)
// drawRect(com.x, com.y, com.width, com.height, com.color)
// drawCircle(ball.x, ball.y, ball.radius, ball.color)
// drawNet()
// drawText(user.score, canvas.width/4, canvas.height/5, 'white')
// drawText(com.score, 3*canvas.width/4, canvas.height/5, 'white')

function game() {
    update()
    render()
}

const framePerSec = 50;

