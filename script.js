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
let gravidade = 0.6;
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
        bY = bY - 40;
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

        // configurando do cano de cima
        ctx.drawImage(canocima, cano[i].x, cano[i].y);

        // configrando cano de baixo
        ctx.drawImage(canobaixo, cano[i].x, cano[i].y + constant);

        // movimentação do cano
        cano[i].x = cano[i].x - 0.5;
        if(cano[i].x == 125) {
            cano.push({
                x : canvas.width,
                y : Math.floor(Math.random() * canocima.height) - canocima.height
                
            })
        }
        
        // passaro entre as bordas do cano
       if(bX + bird.width >= cano[i].x && bX <= cano[i].x + canocima.width
            // passaro colidiu com o cano de cima ou de baixo 
            && (bY <= cano[i].y + canocima.height || bY + bird.height >= cano[i].y + constant)
            // passaro colidiu com o chao
            || bY + bird.height >= canvas.height - chao.height) {
                location.reload();
            }

            // marcando pontos
            if(cano[i].x == 5) {
                score = score + 1;
                pontos.play();
            }
    }


    //desenhando o chao
    ctx.drawImage(chao,0,canvas.height - chao.height);

    // desenhando passaro
    ctx.drawImage(bird,bX,bY);
    bY += gravidade;

    // criando placar
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText ("Placar: " + score, 10, canvas.height - 20)
    
    requestAnimationFrame(jogo);
}

jogo();
    
