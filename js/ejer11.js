class PrimerDigito{
// 11) Dado un numero presente su primer digito
//Ejemplo:  numero=32456
//respuesta=3
    primerdigito(){
        let numero    = document.getElementById('numero').value;
        let respuesta = document.getElementById('resp')
        let primerDigito;
        if(isNaN(numero) == false){
            while(numero >= 10 ){
                numero = Math.floor(numero/10)
            }
            primerDigito = numero;
            respuesta.textContent = `El primero digito es : ${primerDigito}`;
        }else{
            respuesta.value = 'Ingrese nuevamente solo numeros'
        }
    }
}
let ejer11 = new PrimerDigito()
ejer11.primerdigito()