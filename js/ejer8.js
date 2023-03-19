class InverDigito{
//8) Realizar una funcion que retorne un arreglo con los digitos de cualquier numero Ejemplo:  numero=32456  respuesta=[6,5,4,2,3]
    static Indigitos(){
        let num = document.getElementById("num").value;
        let respuesta = num.toString().split("").reverse().map(c => {
        let n = Number(c);
        return isNaN(n) ? null : n;
        }).filter(n => n !== null);
        document.getElementById("resp").value = respuesta;
        return respuesta;
    }
}