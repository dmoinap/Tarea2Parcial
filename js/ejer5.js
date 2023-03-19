class TablaMultiplicar{
//5) Elaborar una funcion de la tabla de multiplicar de cualquier base del 1 al  12
    tablaMultiplicar(){
        let base = parseInt(document.getElementById('base').value);
            document.getElementById("resp").textContent = '';
        for (let i = 1; i <= 12; i++){
            document.getElementById("resp").textContent+= (`${base} x ${i} = ${base * i}\n`);
        }
    }
}
let ejer5 = new TablaMultiplicar()
ejer5.tablaMultiplicar()