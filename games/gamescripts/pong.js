const canvas = document.getElementById('pong')
const context = canvas.getContext('2d');


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
    x: canvas.width - 10,
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
    color: 'white',
    speed: 5,
    veloX: -5,
    veloY: 5
}

function drawNet(){
    for(let i = 0; i <= canvas.height; i += 15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}


function render() {
    drawRect(0,0,canvas.width,canvas.height, '#125070')
    drawText(user.score, canvas.width/4 * 0.9, canvas.height/5, 'white');
    drawText(com.score, 3*canvas.width/4, canvas.height/5, 'white');
    drawNet();
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(com.x, com.y, com.width, com.height, com.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color)
    console.log('frame')
}



canvas.addEventListener('mousemove', movePaddle);

function movePaddle(evt) {
    let rect = canvas.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height/2
}


function collision(b, p) {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;
    return b.right > p.left && b.top < p.bottom && b.left < p.right && b.bottom > p.top 
}

function resetBall() {
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.speed = 5;
    ball.veloX = -ball.veloX
}

function update() {
    ball.x += ball.veloX;
    ball.y += ball.veloY;

    let comLevel = 0.065;

    com.y += (ball.y - (com.y + com.height/2)) * comLevel;

    if(ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.veloY = - ball.veloY
    }
    let player = (ball.x < canvas.width/2) ? user : com;

    if (collision(ball, player)) {
         let collidePoint = (ball.y - (player.y + player.height/2));
        collidePoint = collidePoint / (player.height/2);
        let angleRad = (Math.PI/4) * collidePoint;
    
        let direction = (ball.x < canvas.width/2) ? 1 : -1
    
        ball.veloX =  direction * ball.speed * Math.cos(angleRad)
        ball.veloY =  ball.speed * Math.sin(angleRad)
    
        ball.speed += 0.2;
    }

    if (ball.x - ball.radius < 0) {
        com.score++;
        resetBall();
    } else if (ball.x + ball.radius > canvas.width) {
        user.score++; 
        resetBall();
    }
    

}

function game() {
    update()
    render()
}

const framePerSec = 60;

drawText(user.score, canvas.width/4 * 0.9, canvas.height/5, 'white');
drawText(com.score, 3*canvas.width/4, canvas.height/5, 'white');
drawNet();
drawRect(user.x, user.y, user.width, user.height, user.color);
drawRect(com.x, com.y, com.width, com.height, com.color);
drawCircle(ball.x, ball.y, ball.radius, ball.color)


setTimeout(() => {
    setInterval(game, 1000/framePerSec)
}, 3000)