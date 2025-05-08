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

// variaveis 

let eec = 100;
let constant 
let bx = 33;
let by = 200;
let gravidade = 1.4;
let score = 0;

// carregando sons 

let fly = new Audio();
fly.src = "sounds/fly.mp3"
let pontos = new Audio();
pontos.src = "sounds/score.mp3"