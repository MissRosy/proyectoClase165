
AFRAME.registerComponent("enemy-fireballs", {
    init: function () {        
        setInterval(this.shootEnemyMonster, 2000)
    },
    shootEnemyMonster: function () {
        //Elegir la escena y guardarla en una variable
        

        //Elegir a todos los mounstros
           

        //Ciclo para crear bolas que disparen cada mounstro    
        
       //Crear entidad para bola de fuego
        
       //Atributo de clase para la bola
        

       //Atributo para añadir modelo fireball
        
      //Atributo de cuerpo dinamico con masa 0
        
      //Obtener el atributo de posición de cada mounstro     
        
    //Atributo de posición según la del mounstro 
       

    //Atributo de escala con 0.05 para todos los ejes
        
       
        //Agregar la bola como hija de la escena
        
        //Crear 2 vectores uno para jugador otro para enemigo
        
       //Obtener al enemigo y al jugador como objetos 3D y guardarlos en variables
        

      //Obtener la dirección a la que apunta la cámara de cada uno como vector Three.js
        
    //Vector para guardar el resultado de la resta de los 2 vectores anteriores
        
    
    //Resta usando subVectors y normalize
        
    
     //Dar velocidad e incrementarla en 20
       

        /******************************************************************************************* */

        //Obtener el valor de cuantas vidas tiene el jugador
        

        //eventos de colisión con balas enemigas(fireball es el nombre de la bola de fuego)
        fireball.addEventListener("collide", function (e) {
           
            if (e.detail.body.el.id === "weapon") {               
                if (playerLife > 0) {
                    //Restar vidas y actualizar texto
                    
                }
                if (playerLife <= 0) {
                    //mostrar texto de over
                    
                    //eliminar monstruos
                    
                }

            }
        });

    
    },
    

});
