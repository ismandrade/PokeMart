let velocidadeXBola = 2;
let velocidadeXReta = 2;
let xBola = 370;
let xReta = 348;
let xPoke = 0;

function poke (){
    fill (color (255, 255, 255));
    rect (xPoke, 0, 360, 512);
  }
  
  function bola (){
    fill (color (255, 0, 0));
    rect (xBola, 0, 360, 512)
  }
  
  function reta (){
    fill (color (0, 0, 0));
    rect (xReta, 0, 50, 512)
  }
  
  function botao (){
    fill (color (5, 5, 5));
    circle (xBola, 256, 200);
  }
  
  function abrePokebola (){
     xBola += velocidadeXBola;
     xPoke -= velocidadeXBola
     xReta += velocidadeXReta;
  }

  poke ();
  bola ();
  reta ();
  botao ();
  abrePokebola ();