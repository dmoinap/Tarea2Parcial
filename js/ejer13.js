class Factorial{
//13) Funcion que retorne el factorial de un numero Ejemplo: numero=5 respuesta=5*4*3*2*1=120
    factorialN(numero){
        let resultado = 1;
        for (let i = numero; i >= 1; i--) {
            resultado *= i;
        }
        return resultado;
    }
   factorial(){
    let d = document
    let numero = document.getElementById('numero').value;
    let resp = document.getElementById('resp');
    let fac = this.factorialN(numero)
    d.getElementById("resp").textContent = fac;
   }
}
let ejer13 = new Factorial()
ejer13.factorial()