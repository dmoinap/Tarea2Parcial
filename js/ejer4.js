class NumExponente{
//4) Dado una serie de numeros presentar el exponente de cada numero elavado a su propio numero 
    static Ispotencia(base, exponente) {
        let respuesta = 1;
        for (let i = 1; i <= exponente; i++) {
          respuesta *= base;
        }
        return respuesta;
    }
    esxponenteSerie(){
        let serie = [4, 3, 2, 5];
        let resp = [];
        for (let i = 0; i < serie.length; i++) {
            let exponente = NumExponente.Ispotencia(serie[i], serie[i]);
            resp.push(exponente);
        }
        document.getElementById("resp").textContent = resp;
    }
}
let ejer4 = new NumExponente()
ejer4.esxponenteSerie()