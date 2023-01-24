var mensaje = document.getElementById("mensaje");
var h3 = document.getElementById("cambio");
var boton = document.getElementById("encriptar");
boton.addEventListener('click', encriptar);
var muneco = document.getElementById('muneco');
var txt1 = document.getElementById('texto-indicacion1');
var txt2 = document.getElementById('texto-indicacion2');
var boton_desencriptar = document.getElementById("desencriptar");
boton_desencriptar.addEventListener('click', desencriptar);
const boton_copiar = document.getElementById('copiar');
boton_copiar.addEventListener('click', copy);

function validar(){
    if(mensaje.value.length == 0){
        muneco.style.display = "block";
        txt1.style.display = "block";
        txt2.style.display = "block";
        h3.innerHTML = '';
    }else{

    }
}

mensaje.addEventListener('keyup', validar);

 function encriptar(){
     let frase = '';
     const x = mensaje.value;
     for(var y =0; y<x.length; y++){
         if(x.charAt(y) == 'a'){
             frase = frase + 'ai'; 
         }else if(x.charAt(y) == 'e'){
             frase = frase + 'enter';
         }else if(x.charAt(y) == 'i'){
             frase = frase + 'imes';
         }else if(x.charAt(y) == 'o'){
             frase = frase + 'ober';
         }else if(x.charAt(y) == 'u'){
             frase = frase + 'ufat';
         }else{
             frase = frase + x.charAt(y);
         }
     }
     h3.innerHTML = frase;
     h3.setAttribute('height', '500px');
     muneco.style.display="none";
     txt1.style.display="none";
     txt2.style.display="none";
 }
    
    function desencriptar(){
        let x = mensaje.value;
        let frase = "";
        for(let y =0; y<x.length; y++){
            if(x.charAt(y) == "a" && x.charAt(y+1) == "i"){
                frase = frase + "a";
                y = y + 1;
            }else if(x.charAt(y) == 'e' && x.charAt(y+1) =='n' && x.charAt(y+2) == 't' &&
            x.charAt(y+3) == 'e' && x.charAt(y+4) == 'r'){
                frase = frase + 'e'
                y = y + 4;
            }else if(x.charAt(y) == 'i' && x.charAt(y+1) =='m' && x.charAt(y+2) == 'e' &&
            x.charAt(y+3) == 's'){
                frase = frase + 'i'
                y = y + 3;
            }else if(x.charAt(y) == 'o' && x.charAt(y+1) =='b' && x.charAt(y+2) == 'e' &&
            x.charAt(y+3) == 'r'){
                frase = frase + 'o'
                y = y + 3;
            }else if(x.charAt(y) == 'u' && x.charAt(y+1) =='f' && x.charAt(y+2) == 'a' &&
            x.charAt(y+3) == 't'){
                frase = frase + 'u'
                y = y + 3;
            }
            else{
                frase = frase + x.charAt(y);
            }

        }
        h3.innerHTML = frase;
        muneco.style.display="none";
        txt1.style.display="none";
        txt2.style.display="none";
    }

    function copy() {
        let copyText = document.querySelector("#cambio");
        copyText.select();
        document.execCommand("copy");
        swal('Copiado');
      }


   
    
