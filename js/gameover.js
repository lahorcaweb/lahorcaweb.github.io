function horca(errores){
                var imagen = new Image();
                imagen.src = "imagenes/ahorcado"+errores+".png";
                imagen.onload = function(){
                    ctx.drawImage(imagen, 390, 0, 230, 230);
                }
            }
            
            function ajusta(xx, yy){
                var posCanvas = canvas.getBoundingClientRect();
                var x = xx-posCanvas.left;
                var y = yy-posCanvas.top;
                return{x:x, y:y}
            }
            
            function selecciona(e){
                var pos = ajusta(e.clientX, e.clientY);
                var x = pos.x;
                var y = pos.y;
                var tecla;
                var bandera = false;
                for (var i = 0; i < teclas_array.length; i++){
                    tecla = teclas_array[i];
                    if (tecla.x > 0){
                        if ((x > tecla.x) && (x < tecla.x + tecla.ancho) && (y > tecla.y) && (y < tecla.y + tecla.alto)){
                            break;
                        }
                    }
                }
                if (i < teclas_array.length){
                    for (var i = 0 ; i < palabra.length ; i++){ 
                        letra = palabra.substr(i, 1);
                        if (letra == tecla.letra){ 
                            caja = letras_array[i];
                            caja.dibujaLetra();
                            aciertos++;
                            bandera = true;
                        }
                    }
                    if (bandera == false){
                        errores++;
                        horca(errores);
                        if (errores == 5) gameOver(errores);
                    }
                    ctx.clearRect(tecla.x - 1, tecla.y - 1, tecla.ancho + 2, tecla.alto + 2);
                    tecla.x - 1;
                    if (aciertos == palabra.length) gameOver(errores);
                }
            }
            
            /* La funcion de este codigo nos permite mandar un mensaje para el caso en el que haya Ganado o Perdido */
            function gameOver(errores){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "black";
                ctx.font = "bold 50px Courier";
                if (errores < 5){
                    alert("😀 EXCELENTE INGENIERO 😎", 110, 280);
                } else {
                    alert("😈 FALLASTE INGENIERO 👻", 110, 280);
                }
                ctx.font = "bold 80px Courier";
                lon = (canvas.width - (palabra.length*48))/2;
                ctx.fillText(palabra, lon, 380);
                horca(errores);
            }
            window.onload = function(){
                canvas = document.getElementById("pantalla");
                if (canvas && canvas.getContext){
                    ctx = canvas.getContext("2d");
                    if(ctx){
                        teclado();
                        pintaPalabra();
                        horca(errores);
                        canvas.addEventListener("click", selecciona, false);
                    } else {
                        alert ("Error al cargar el contexto!");
                    }
                }
            }