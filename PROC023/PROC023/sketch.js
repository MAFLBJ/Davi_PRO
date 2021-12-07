//Ex.:https://whitehatjr.github.io/AngryBirds-1/

//namespacing:
const Engine = Matter.Engine;//Módulo responsáveis pelas leis físicas que rejem o mundo
const Composite = Matter.Composite;/* Modulo responsável pela coleção de Matter.Body, Matter.Constraint e outros objetos Matter.Composite. 
                                    UM COMPOSITE PODE CONTER DESDE UM ÚNICO CORPO ATÉ UM MUNDO INTEIRO 
                                    */
const Bodies = Matter.Bodies;/* O módulo Matter.Bodies contém métodos para criar corpos rígidos com configurações*/

var canvas;
var engine, world;
var box1;

function setup() {
    canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    //box1 = Bodies.rectangle(200, 200, 100, 50);
    //Composite.add(world, box1);
    box1 = new Caixas(200, 200, 100, 50);
}

function draw() {
    background(0);
    Engine.update(engine);

    //rect(box1.position.x, box1.position.y, 100, 50);
    box1.display();
}

class Caixas {
    constructor(posX, posY, largura, altura){
        this.posX = posX;
        this.posY = posY;
        this.largura = largura;
        this.altura = altura;

        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(this.posX, this.posY, this.largura, this.altura, options);
        Composite.add(world, this.body);

    }

    display(){
        rect(this.body.position.x, this.body.position.y, this.largura, this.altura);
    }
}


