const Engine = Matter.Engine;//Módulo responsáveis pelas leis físicas que rejem o mundo
const World = Matter.Composite;/* Modulo responsável pela coleção de Matter.Body, Matter.Constraint e outros objetos Matter.Composite. 
                                    UM COMPOSITE PODE CONTER DESDE UM ÚNICO CORPO ATÉ UM MUNDO INTEIRO 
                                    */
const Bodies = Matter.Bodies;/* O módulo Matter.Bodies contém métodos para criar corpos rígidos com configurações*/
const Constraint = Matter.Constraint;

var engine, world;
var solo, box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var plataform;
var constrainedLog;//restrição do tronco
var estilingue1;


function preload() {
    imgFundo = loadImage("sprites/bg.png");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    rectMode(CENTER);


    //angleMode(RADIANS); unidade padrão!
    //angleMode(DEGREES); unidade alternativa, porém aproximada

    solo = new Solo(600, height, 1200, 20);
    plataform = new Solo(150, 305, 300, 170);
    //constrainedLog = new Troncos(230, 180, 80, PI / 2);


    box1 = new Caixas(700, 320, 70, 70);
    box2 = new Caixas(920, 320, 70, 70);
    pig1 = new Porcos(810, 350);
    log1 = new Troncos(810, 260, 300, PI / 2);

    box3 = new Caixas(700, 240, 70, 70);
    box4 = new Caixas(920, 240, 70, 70);
    pig2 = new Porcos(810, 220);

    log2 = new Troncos(810, 180, 300, PI / 2);

    box5 = new Caixas(810, 160, 70, 70);
    log3 = new Troncos(760, 120, 150, PI / 7);
    log4 = new Troncos(870, 120, 150, -PI / 7);

    bird = new Passaros(100, 100);
    estilingue1 = new Estilingue(bird.body, {x:200, y:100}, 0.4, 20);

}

function draw() {
    background(imgFundo);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    solo.display();
    plataform.display();
    box1.display();
    box2.display();

    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();

    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    //constrainedLog.display();
    estilingue1.display();
    
}


class BaseClass {
    constructor(x, y, largura, altura, angulo) {
        this.posX = x;
        this.posY = y;
        this.lar = largura;
        this.alt = altura;

        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = Bodies.rectangle(this.posX, this.posY, this.lar, this.alt, options);
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.lar, this.alt);
        pop();
    }
}
class Passaros extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 50);
        /*
        var options = {
            'density': 1.5,
            'friction': 1.0,
            'restitution': 0.5
        }
        */
        this.image = loadImage("sprites/bird.png");
    }
    display() {
        /*var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        */
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        super.display();
    }


}

class Caixas extends BaseClass {
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
        /*
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        */
        this.image = loadImage("sprites/wood1.png");

    }
    display() {
        /*var pos =this.body.position;//alias para this.body.position é opicional
        var angle = this.body.angle;
        */
        super.display();
    }
}

class Solo {
    constructor(x, y, largura, altura) {
        this.posX = x;
        this.posY = y;
        this.lar = largura;
        this.alt = altura;
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(this.posX, this.posY, this.lar, this.alt, options);
        World.add(world, this.body);

    }
    display() {

        //rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.lar, this.alt);
    }
}

class Porcos extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 50);
        /*
                var options = {
                    'restitution': 0.8,
                    'friction': 0.3,
                    'density': 1.0
                }
                */
        this.image = loadImage("sprites/enemy.png");

    }
    display() {

        super.display();
    }
}

class Troncos extends BaseClass {
    constructor(x, y, altura, angulo) {
        super(x, y, 20, altura, angulo);
        /*
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        */
        this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body, angulo);

    }
    display() {
        super.display();

    }
};

class Estilingue {
    constructor(corpoA, pontoB, rigidez, comp) {
        this.corpoA = corpoA;
        this.pontoB = pontoB;
        this.rigidez = rigidez;
        this.comp = comp;
        
        var options = {
            bodyA: this.corpoA,
            pointB: this.pontoB,
            stiffness: this.rigidez,
            length: this.comp
        }
        
        this.estilingue = Constraint.create(options);
        World.add(world, this.estilingue);


    }
    fly(){
        this.estilingue.bodyA = null;
    }
    
    display() {
        if(this.estilingue.bodyA != null){
        push();
        strokeWeight(4);
        fill("black");
        line(this.corpoA.position.x, this.corpoA.position.y, this.pontoB.x, this.pontoB.y);
        pop();
    }


    }
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX, y:mouseY});

}
function mouseReleased(){
    estilingue1.fly()

}