class BaseExponente {
    Ispotencia(base,exponente) {
      let respuesta = 1;
      for (let i = 1; i <= exponente; i++) {
        respuesta *= base;
        
      }
      return respuesta;
    }
  
    potencia() {
      let d = document
        let base = parseInt(d.getElementById('base').value);
        let exponente = parseInt(d.getElementById('exponente').value);
        let respuesta = this.Ispotencia(base, exponente)
        d.getElementById("resp").textContent = respuesta;
        return respuesta;
      }
    }
    
    let pt = new BaseExponente();