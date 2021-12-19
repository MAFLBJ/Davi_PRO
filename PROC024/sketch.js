const Engine = Matter.Engine;//Módulo responsáveis pelas leis físicas que rejem o mundo
const World = Matter.Composite;/* Modulo responsável pela coleção de Matter.Body, Matter.Constraint e outros objetos Matter.Composite. 
                                    UM COMPOSITE PODE CONTER DESDE UM ÚNICO CORPO ATÉ UM MUNDO INTEIRO 
                                    */
const Bodies = Matter.Bodies;/* O módulo Matter.Bodies contém métodos para criar corpos rígidos com configurações*/

var engine, world;
var solo, box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    rectMode(CENTER);


    //angleMode(RADIANS); unidade padrão!
    
    solo = new Solo(600, height, 1200, 20);

    box1 = new Caixas(700, 320, 70, 70);
    box2 = new Caixas(920, 320, 70, 70);
    pig1 = new Porcos(810, 350);
    log1 = new Troncos(810, 260, 300, PI/2);

    box3 = new Caixas(700, 240, 70, 70);
    box4 = new Caixas(920, 240, 70, 70);
    pig2 = new Porcos(810, 220);

    log2 = new Troncos(810, 180, 300, PI / 2);

    box5 = new Caixas(810, 160, 70, 70);
    log3 = new Troncos(760, 120, 150, PI / 7);
    log4 = new Troncos(870, 120, 150, -PI / 7);

    bird = new Passaros(100, 100);

}

function draw() {
    background(0);
    Engine.update(engine);
   
    solo.display();
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
}


class Caixas {
    constructor(x, y, largura, altura) {
        this.x = x;
        this.y = y;
        this.lar = largura;
        this.alt = altura;
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = Bodies.rectangle(this.x, this.y, this.lar, this.alt, options);
        World.add(world, this.body);

    }
    display() {
        /*var pos =this.body.position;//alias para this.body.position é opicional
        var angle = this.body.angle;
        */
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.lar, this.alt);
        pop();
    }
}

class Solo {
    constructor(x, y, largura, altura) {
        this.x = x;
        this.y = y;
        this.lar = largura;
        this.alt = altura;
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(this.x, this.y, this.lar, this.alt, options);
        World.add(world, this.body);

    }
    display() {

        //rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.lar, this.alt);
    }
}

class Porcos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lar = 50;
        this.alt = 50;
        var options = {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0
        }
        this.body = Bodies.rectangle(this.x, this.y, this.lar, this.alt, options);
        World.add(world, this.body);

    }
    display() {

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        //rectMode(CENTER);
        fill("green");
        rect(0, 0, this.lar, this.alt);
        pop();
    }
}

class Troncos {
    constructor(x, y, altura, angulo) {
        this.x = x;
        this.y = y;
        this.lar = 20;
        this.alt = altura;
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = Bodies.rectangle(this.x, this.y, this.lar, this.alt, options);

        Matter.Body.setAngle(this.body, angulo);
        World.add(world, this.body);

    }
    display() {

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.lar, this.alt);
        pop();
    }
};

class Passaros {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lar = 50;
        this.alt = 50;
        var options = {
            'density': 1.5,
            'friction': 1.0,
            'restitution': 0.5
        }
        this.body = Bodies.rectangle(this.x, this.y, this.lar, this.alt, options);
        World.add(world, this.body);
    }
    display() {
        /*var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        */
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("red");
        fill("red");
        rect(0, 0, this.lar, this.alt);
        pop();
    }


}
