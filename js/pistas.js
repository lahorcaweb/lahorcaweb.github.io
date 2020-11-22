 /// Funcion para dar una pista al jugador ////
            function pistaFunction(palabra){
                let pista = ""; 
                switch(palabra){  
                    case 'HTML':   
                        pista = "Es un Lenguaje de Etiquetas";
                        break; 
                    case 'OBJETOS':
                        pista = "Es un ente abstracto en programacion";
                        break;
                    case 'DATOS':
                        pista = "Son almacenados en bases de";
                        break;
                    case 'ELSE':
                        pista = "Es parte de la condicion IF";
                        break;
                    case 'PALETTONN':   
                        pista = "Se encuentran todos los colores en binario";
                        break; 
                    case 'PYTHONTUTOR':   
                        pista = "Es una plataforma donde se corren los codigos";
                        break; 
                    case 'ESTILOS':   
                        pista = "Son css3 pero tambien se les conoce como";
                        break; 
                    case 'METODOS':   
                        pista = "Son subrutinas cuyo codigo es definido en una clase";
                        break; 
                    case 'EJEMPLO':   
                        pista = "Se prueba en python tutor y nos podemos guiar con el";
                        break; 
                    case 'SITIO':   
                        pista = "Sinonimo de lugar web";
                        break; 
                    case 'LENGUAJE':   
                        pista = "Con estos programamos y no son programas";
                        break; 
                    case 'PROGRAMA':   
                        pista = "Se llama como la asignatura pero en singular";
                        break; 
                    case 'CODIGOS':   
                        pista = "Nos los pasabamos en la UTN para no reprobar Progra";
                        break; 
                    case 'ARREGLOS':   
                        pista = "Son un conjunto de variables que se manejan con el mismo nombre";
                        break; 
                    default:  
                        pista="Desarrollo de Aplicaciones";
                    

                }
                ctx.fillStyle = "black"; 
                ctx.font = "bold 20px Courier";  
                ctx.fillText(pista, 10, 15);  
            }
           
            function teclado(){
                var ren = 0;
                var col = 0;
                var letra = "";
                var miLetra;
                var x = inicioX;
                var y = inicioY;
                for(var i = 0; i < letras.length; i++){
                    letra = letras.substr(i,1);
                    miLetra = new Tecla(x, y, lon, lon, letra);
                    miLetra.dibuja();
                    teclas_array.push(miLetra);
                    x += lon + margen;
                    col++;
                    if(col==10){
                        col = 0;
                        ren++;
                        if(ren==2){
                            x = 280;
                        } else {
                            x = inicioX;
                        }
                    }
                    y = inicioY + ren * 50;
                }
            }
            
            function pintaPalabra(){
                var p = Math.floor(Math.random()*palabras_array.length);
                palabra = palabras_array[p];
      
                pistaFunction(palabra);
            
                var w = canvas.width;
                var len = palabra.length;
                var ren = 0;
                var col = 0;
                var y = 230;
                var lon = 50;
                var x = (w - (lon+margen) *len)/2;
                for(var i=0; i<palabra.length; i++){
                    letra = palabra.substr(i,1);
                    miLetra = new Letra(x, y, lon, lon, letra);
                    miLetra.dibuja();
                    letras_array.push(miLetra);
                    x += lon + margen;
                }
            }
          