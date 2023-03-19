class ParDigito{
//10) Dado un numero presente los digitos pares Ejemplo:  numero=32456 respuesta=2,4,6
        digitoPares(){
            let numero = document.getElementById('digito').value
            let digitos   = numero.toString().split('');
            let digitosPares = []
            let respuesta = document.getElementById('resp')
            if(isNaN(numero) == false){
                for (let i = 0; i < digitos.length; i++) {
                    if (digitos[i] % 2 === 0) {
                        digitosPares.push(parseInt(digitos[i]));
                    }
                }
            }else{
                respuesta.value = 'ERROR, se ha ingresado letras'
            }
            respuesta.textContent = `Digitos Pares : ${digitosPares}`;
            console.log(digitosPares);
        }
    }
let ejer10 = new ParDigito()
ejer10.digitoPares()