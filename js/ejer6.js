class ArregloDivisores{
//6) Realizar una funcion que retorne un arreglo con los divisores de cualquier numero 
// de cualquier valor inicial
    divisores(numero, valorInicial){
        let divisoresArr = [];
        for (let div = valorInicial; div < numero; div++){
            if (numero % div === 0) {
                divisoresArr.push(div);
            }
        }
        return divisoresArr;
    }
    Divisores(){
        let d = document
        let numero = parseInt(d.getElementById("numero").value)
        let valorInicial = parseInt(d.getElementById("valorInicial").value)
        let div = this.divisores(numero, valorInicial);
        d.getElementById("resp").textContent = div.join(",");
    }
}      
let ejer6 = new ArregloDivisores()
ejer6.Divisores()