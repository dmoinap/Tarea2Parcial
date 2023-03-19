class Rango{
//15) Realizar una funcion que retorne un arreglo con los numeros dentro de un rango entre dos valores excluido el valor final:   inicio=2  fin=8
// ejemplo  respuesta=[2,3,4,5,6,7]    
    Isrango(inicio,fin){
        let conjunto = []
        for (let i = inicio; i<fin; i++){
            conjunto.push(i)
        }
        return conjunto
    }
    rango(){
        let salida = document.getElementById("resp")
        let inicio = document.getElementById("inicio").value
        let fin = document.getElementById("fin").value
        let cal = this.Isrango(inicio,fin)
        salida.textContent=(`el rango entre ${inicio} y ${fin} es : [${cal}]`)
    }
}
let ejer15 = new Rango()