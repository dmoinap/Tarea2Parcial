class ArregloFactorial {
//14) Dado un arreglo de numeros presentar sus factorialesEjemplo:  arreglo=[3,2,4] respuesta=6,2,24
// respuesta=6
    factorialN(numero) {
        let resultado = 1;
        for (let i = numero; i >= 1; i--) {
            resultado *= i;
        }
        return resultado;
    }
    factorial() {
        let numero = document.getElementById("numero").value.split(",");
        let factoriales = [];
        console.log(numero);
        for (let i = 0; i < numero.length; i++) {
            let factorial = this.factorialN(parseInt(numero[i]));
            factoriales.push(factorial);
        }
        document.getElementById("resp").textContent=(`los factoriales de [${numero}] son : [${factoriales}]`)
    }
}
let ejer14 = new ArregloFactorial();
ejer14.factorial();