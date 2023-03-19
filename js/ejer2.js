class NumPrimos{
// 2) Dado una serie de numeros presentar los numeros primos ejemplo serie=[6,5,25,7,28] respuesta==5,7
    esPrimo(num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
    }
    
      static encontrarPrimos(serie) {
        let primos = [];
        for (let i = 0; i < serie.length; i++) {
          if (this.esPrimo(serie[i])) {
            primos.push(serie[i]);
          }
        }
        return primos;
      }
    }
    
    function presentarPrimos() {
      const serie = document.getElementById("serie").value.split(",").map(Number);
      const primos = NumPrimos.encontrarPrimos(serie);
      document.getElementById("resp").value = primos.join(", ");
    }
let ejer2 = new NumPrimos()
ejer2.esPrimo()