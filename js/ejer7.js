class SumaDivisores{
//7) Realizar una funcion que retorne la suma de los divisores de cualquier numero 
// de cualquier valor inicial
    sumaDivisores(numero, valorInicial){
        let suma = 0;
        for (let i = valorInicial; i < numero; i++){
            if (numero % i === 0) {
                 console.log(i)   
                suma += i;
            }
            return suma;
        }
    }
    divisores(){
        let d = document
        let numero = parseInt(d.getElementById("numero").value);
        let valorInicial = parseInt(document.getElementById("valorInicial").value);
        let resp = this.sumaDivisores(numero, valorInicial);
        d.getElementById("resp").textContent = `La suma de los divisores es: ${resp}`;
    }
}
let ejer7 = new SumaDivisores();
ejer7.divisores();