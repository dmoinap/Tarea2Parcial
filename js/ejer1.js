class Divisores {
    sumaDivisores(serie){
      let acu = 0;
      for (let divisor = 1; divisor <= Math.floor(serie/2); divisor++) {
        if (serie % divisor === 0) {
          acu += divisor;
        }
      }
      return acu;
    }
    
    sumaPerfectos(){
      let d = document;
      let serie = d.getElementById('serie').value.split(',').map(Number);
      let acu = 0;
      for (let i = 0; i <= serie.length; i++) {
        let cal = this.sumaDivisores(serie[i]);
        if (cal === serie[i]) {
          acu += serie[i];
        }
      }
      d.getElementById("resp").textContent = `La suma de numeros perfectos es: ${acu}`;
    }
  }
  
  let ejer1 = new Divisores();
  ejer1.sumaPerfectos();