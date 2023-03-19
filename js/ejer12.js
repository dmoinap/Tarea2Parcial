class UltimoDigito{
// 12) Dado un numero presente el ultimo digito
// Ejemplo:  numero=32456
// respuesta=6
    ultimoDigito = () => {
        let numero = document.getElementById('num').value;
        let respuesta = document.getElementById('resp')
        let ultimo;
        if(isNaN(numero) == false){
            ultimo = numero % 10 ;
            respuesta.textContent = `El Ultimo Digito es : ${ultimo}`;
            console.log(ultimo);
        }else{
            respuesta.value = 'Ingrese nuevamente solo numeros'
        }
    }
}
let ejer12 = new UltimoDigito()
ejer12.ultimoDigito()