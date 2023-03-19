class SumaDigitos{
//9) Dado un numero presente la  suma de sus digitos
//Ejemplo:  numero=32456
  sumaDigitos(){
    let digito = parseInt(document.getElementById("digito").value);
    let digit1=0,suma=0,c=0
    let res=document.getElementById("res")
    while (digito>0) {
        digit1=digito % 10
        digito=parseInt(digito/10)
        suma=suma+digit1
        c=c+1
        document.getElementById("resp").textContent = `La suma de los digitos es: ${suma}`
    }
  }
}
let ejer9 = new SumaDigitos()
ejer9.sumaDigitos()