var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 640;
canvas.height = window.innerHeight - 480;

//토끼 객체
var tokki = {
    x : 100,
    y : 200,
    width : 50,
    height : 50,
    draw() {
        ctx.fillStyle = 'skyblue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
tokki.x += 1;
tokki.draw();


//장애물 객체
class Puddle {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
var puddle = new Puddle();
puddle.draw();


var timer = 0;
var manypuddles = [];


//매 프레임마다 실행되는 기능
function goForward(){
    requestAnimationFrame(goForward);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    //장애물 등장 빈도
    if (timer % 240 === 0) {
        var puddle = new Puddle();
        manypuddles.push(puddle);
    }

    manypuddles.forEach((a)=>{
        a.x--;
        a.draw();
    })

    tokki.draw();
}

goForward();