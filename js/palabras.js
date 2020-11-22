            /* Variables */
            var ctx;
            var canvas;
            var palabra;
            var letras = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
            var colorTecla = "#585858";
            var colorMargen = "gold";
            var inicioX = 200;
            var inicioY = 300;
            var lon = 35;
            var margen = 18;
            var pistaText = "";

            /* Arreglos */
            var teclas_array = new Array();
            var letras_array = new Array();
            var palabras_array = new Array();

            /* Variables de control */
            var aciertos = 0;
            var errores = 0;
           
            
            /* Palabras del Juego */
            palabras_array.push("HTML");
            palabras_array.push("OBJETOS");
            palabras_array.push("DATOS");
            palabras_array.push("ELSE");
            palabras_array.push("PALETTONN");
            palabras_array.push("PYTHONTUTOR");
            palabras_array.push("ESTILOS");
            palabras_array.push("METODOS");
            palabras_array.push("EJEMPLO");
            palabras_array.push("SITIO");
            palabras_array.push("LENGUAJE");
            palabras_array.push("PROGRAMA");
            palabras_array.push("CODIGOS");
            palabras_array.push("ARREGLOS");
            palabras_array.push("CICLOS");
                    
            /* Objetos */
            function Tecla(x, y, ancho, alto, letra){
                this.x = x;
                this.y = y;
                this.ancho = ancho;
                this.alto = alto;
                this.letra = letra;
                this.dibuja = dibujaTecla;
            }
            
            function Letra(x, y, ancho, alto, letra){
                this.x = x;
                this.y = y;
                this.ancho = ancho;
                this.alto = alto;
                this.letra = letra;
                this.dibuja = dibujaCajaLetra;
                this.dibujaLetra = dibujaLetraLetra;
            }
           
            /* Funciones */
            function dibujaTecla(){
                ctx.fillStyle = colorTecla;
                ctx.strokeStyle = colorMargen;
                ctx.fillRect(this.x, this.y, this.ancho, this.alto);
                ctx.strokeRect(this.x, this.y, this.ancho, this.alto);
                
                ctx.fillStyle = "white";
                ctx.font = "bold 20px courier";
                ctx.fillText(this.letra, this.x+this.ancho/2-5, this.y+this.alto/2+5);
            }
         
            function dibujaLetraLetra(){
                var w = this.ancho;
                var h = this.alto;
                ctx.fillStyle = "black";
                ctx.font = "bold 40px Courier";
                ctx.fillText(this.letra, this.x+w/2-12, this.y+h/2+14);
            }
            function dibujaCajaLetra(){
                ctx.fillStyle = "white";
                ctx.strokeStyle = "black";
                ctx.fillRect(this.x, this.y, this.ancho, this.alto);
                ctx.strokeRect(this.x, this.y, this.ancho, this.alto);
            }
            