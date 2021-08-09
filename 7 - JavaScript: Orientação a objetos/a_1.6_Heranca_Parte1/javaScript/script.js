// Herança - Reutilização e manuteção
// Classe: Cao - Passaro

class Animal { // SuperClasse - pai
    constructor() {
        this.cor = ""
        this.tamanho = 0
        this.peso = 0
    }

    correr() {
        console.log("Correr")
    }

    dormir() {
        console.log("Dormir")
    }
}

class Cao extends Animal { // Subclase - filha
    latir() {
        console.log("Cão lati")
    }
}

class Passaro extends Animal { // Subclase - filha
  voar() {
    console.log("Passaro voa")
  }
}

// Instancia
const cao = new Cao()
cao.correr()
cao.dormir()
cao.latir()
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)

const passaro = new Passaro()
passaro.correr();
passaro.dormir();
passaro.voar()
