class Calculadora{

    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
    sumaPrefecto(){
        //1) Dado una serie de numeros presentar la suma de los numeros perfectos
        let d=document
        let serie = d.getElementById('serie').value.split(','.map(Number))
        let sumaPerfectos = 0;
        for (let i = 0; i < serie.length; i++){
            let num = serie[i];
            let sumaDivisores = 0
            for (let j = 1; j < num; j++){
                if (num % j === 0){
                sumaDivisores += j;
                }
            }
            if (sumaDivisores === num){
                sumaPerfectos += num;
            }   
        }
        console.log(sumaPerfectos); // salida: 30
    }
    seriePrimos(){
        //2) Dado una serie de numeros presentar los numeros primos
        let acu=0,divisor=2,band=1
        while(divisor < num && band == 1){
            if (num % divisor == 0){
                // romper ciclo es cambiar el valor de la bandera
                band=0
            }else{
                divisor=divisor+1
            }
        }
        return band
    }
    baseExponente(){
        //3) Elaborar una funcion que reciba dos valores base y exponente. 
        // La funcion debera retornar la base elevada al exponente 
        function potencia(base, exponente){
            let resultado = 1;
            for (let i = 0; i < exponente; i++){
                resultado *= base;
            }
            return resultado;
            }
    }
    esxponenteSerie(){
        //4) Dado una serie de numeros presentar el exponente de cada numero elavado a su propio numero 
        let serie = [4, 3, 2, 5];
        let resp = [];
        for (let i = 0; i < serie.length; i++) {
            let exponente = Calculadora.Ispotencia(serie[i], serie[i]);
            resp.push(exponente);
        }
        document.getElementById("resp").textContent = resp;
    }
    tablaMultiplicar(base){
        //5) Elaborar una funcion de la tabla de multiplicar de cualquier base del 1 al  12
        base=5
        //respuesta= 5*1=5
        //5*2=10
        //....
        //5*12=60
        // Realizamos del 1 al 12 y generamos la tabla de multiplicación
        for (let i = 1; i <= 12; i++){
        // Multiplicamos la base por el número actual de la iteración
            let resultado = base * i;
                // Imprimimos el resultado en la consola
                console.log(base + " * " + i + " = " + resultado);
        }
    }
    divisores(numero, valorInicial){
        //6) Realizar una funcion que retorne un arreglo con los divisores de cualquier numero 
        // de cualquier valor inicial
        let divisoresArr = [];
        for (let div = valorInicial; div < numero; div++){
            if (numero % div === 0) {
                divisoresArr.push(div);
            }
        }
        return divisoresArr;
    }
    sumaDivisores(numero, valorInicial){
        //7) Realizar una funcion que retorne la suma de los divisores de cualquier numero 
        // de cualquier valor inicial
        let suma = 0;
        for (let i = valorInicial; i < numero; i++){
            if (numero % i === 0) {
                 console.log(i)   
                suma += i;
            }
            return suma;
        }
    }
    digitosInversos(numero){
        //8) Realizar una funcion que retorne un arreglo con los digitos de cualquier numero
        let arreglo = [];
        while (numero){
            arreglo.push(numero % 10);
            numero = Math.floor(numero / 10);
            return arreglo;
        }
        console.log(digitosInversos(32456)); // respuesta: [6, 5, 4, 2, 3]
    }
    sumarDigitos(numero){
        //9) Dado un numero presente la  suma de sus digitos
        let suma = 0;
        while (numero){
            suma += numero % 10;
            numero = Math.floor(numero / 10);
            return suma;
        }
        console.log(sumarDigitos(32456)); // respuesta: 20
    }
    imprimirDigitosPares(numero){
        //10) Dado un numero presente los digitos pares
        // Convertir el número en un arreglo de dígitos
        var digitos = numero.toString().split("");
        // Crear un arreglo vacío para almacenar los dígitos pares
        var digitosPares = [];
        // Realizar sobre cada dígito del número
        for (var i = 0; i < digitos.length; i++){
            // Si el dígito es par, agregarlo al arreglo de dígitos pares
            if (digitos[i] % 2 === 0){
                digitosPares.push(digitos[i]);
            }
        // Imprimir los dígitos pares separados por comas
        console.log(digitosPares.join(","));
        }
    }
    obtenerPrimerDigito(numero){
        //11) Dado un numero presente su primer digito
        let primerDigito = numero;
        while (primerDigito >= 10){
            primerDigito = Math.floor(primerDigito / 10);
            return primerDigito;
        }
        console.log(obtenerPrimerDigito(32456)); // respuesta: 3
    }
    obtenerUltimoDigito(numero){
        //12) Dado un numero presente el ultimo digito
        return numero % 10
        /////ESTO ESTA MAL !!!!!!!!!!!
        console.log(obtenerUltimoDigito(32456)); // respuesta: 6
    }
    calcularFactorial(numero){
        //13) Elaborar una funcion que retorne el factorial de un numero
        let resultado = 1;
        for (let i = 2; i <= numero; i++){
            resultado *= i;
            return resultado;
        }
        console.log(calcularFactorial(5)); // respuesta: 120
    }
    factorial(num){
        //14) Dado un arreglo de numeros presentar sus factoriales
        if (num === 0 || num === 1){
            return 1;
        }else{
            return num * factorial(num - 1);
        }
    }
    factorialesEnArreglo(arreglo){
        //14) Dado un arreglo de numeros presentar sus factoriales
        var resultados = [];
        for (var i = 0; i < arreglo.length; i++){
            resultados.push(factorial(arreglo[i]));
            return resultados;
        }
        var arreglo = [3, 2, 4];
        var respuesta = factorialesEnArreglo(arreglo);
        console.log(respuesta); // [6, 2, 24]
    }
    obtenerNumerosEnRango(inicio, fin){
        //15) Realizar una funcion que retorne un arreglo con los numeros dentro de un
        // rango entre dos valores excluido el valor final
        let numeros = [];
        for (let i = inicio; i < fin; i++) {
            numeros.push(i);
            return numeros;
        }
        console.log(obtenerNumerosEnRango(2, 8)); // respuesta: [2, 3, 4, 5, 6, 7]
    }
}
let cal1= new Calculadora()
