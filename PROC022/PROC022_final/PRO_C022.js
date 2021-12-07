/*
● Usar um mecanismo de física para criar um mundo com objetos nele.
● Integrar o mecanismo de física com o código p5 para criar objetos interativos,
  seguindo as regras da física neste mundo.
● Ajustar o mecanismo de física para mudar o comportamento
  dos objetos no seu mundo.

Alguma bibliotecas com Mecanismos de Física: Existem muitos tipos diferentes de
bibliotecas para o mecanismo de física em javascript. Algumas das mais populares são:
 box2d, matter.js e p2.js.

Com base na Matter.js usaremos três objetos principais -> Mundo, Mecanismo e Corpos.
a partir dos módulos : Matter.Engine, Matter.World/Composite e Matter.Bodies

Sobre a Matter.js:
referencia: https://brm.io/matter-js/
Documentação: https://brm.io/matter-js/docs/			

É um mecanismo de fisica 2D para a web.
hospedada: <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.js" type="text/javascript"></script>
            https://github.com/liabru/matter-js/tree/master/build;
        	
_________________________________________________________________________________________________
*/

//1. Salvamos em um alias (apelido-atalho ou namespace) os 3 principais Módulos que precisaramos:
const Engine = Matter.Engine;
const World = Matter.Composite;
const Bodies = Matter.Bodies;

//2.definição das variáveis:
var canvas;
var ground, ball;

function setup() {
    canvas = createCanvas(400, 400);
    //3.1 criação das leis de fisica que irão reger o nosso mundo
    engine = Engine.create();
    //4. criação do mundo:
    world = engine.world;

    /*var ground_options ={
        isStatic: true
    }    
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    */
    //5.1 criação do corpo solo como um corpo retangular:
    ground = Bodies.rectangle(width/2, height, width, 0.1*height, { isStatic: true });
    //5.2 adição do corpo solo ao mundo criado:
    World.add(world, ground);
    
    /*var ball_options ={
        restitution: 1.0
    }
    ball = Bodies.circle(200,100,20, ball_options);
    */
    ball = Bodies.circle(width/2, height/2, 20*width / height, { restitution: 1.0 });
    World.add(world, ball);
    //console.log(ground);
    //console.log(0.1 * width / height);
}

function draw() {
    background(0);
    //3.2 atualização - efeito das leis da física:
    Engine.update(engine);
    /*
    Matter.Engine.update(engine, [delta=], [correction=])
    faz a simulação avançar in em um tempo amostral delta. O argumento correction é
    opcional, especifica o fator de tempo de correção para atualização, isto pode ajudar
    a melhorar a precisão. O valor da correção é definido como delta/lastDelta 
    */
    // 5.3 Damos a vestimenta para nosso corpo: 
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 0.1*height);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20*width/height);
}