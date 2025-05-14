var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// carregando imagens

var bird = new Image();
bird.src ="images/bird.png"
var bg = new Image();
bg.src = "images/bg.png"
var chao = new Image();
chao.src = "images/chao.png"
var canobaixo = new Image();
canobaixo.src = "images/canobaixo.png"
var canocima = new Image();
canocima.src = "images/canocima.png"
var cano = [];

cano[0] = {
    x : canvas.width,
    y : 0
}

// variaveis 

let eec = 100;
let constant 
let bX = 33;
let bY = 200;
let gravidade = 1.4;
let score = 0;

// carregando sons 

let fly = new Audio();
fly.src = "sounds/fly.mp3"
let pontos = new Audio();
pontos.src = "sounds/score.mp3"



    // captura de teclas
    document.addEventListener("keydown",voa)

    //função voando

    function voa() {
        bY = bY - 26;
        fly.play();
    }

function jogo() {
    // função do jogo
    ctx.drawImage(bg,0,0);
    //drawImage(Imagem X,Y)


    // crinado canos
    for(let i = 0; i < cano.length; i++) {
        // posição do cano de baixo
        constant = canocima.height + eec;
    }


    //desenhando o chao
    ctx.drawImage(chao,0,canvas.height - chao.height);

    // desenhando passaro
    ctx.drawImage(bird,bX,bY);
    bY += gravidade;
    requestAnimationFrame(jogo);
}

jogo();
    
