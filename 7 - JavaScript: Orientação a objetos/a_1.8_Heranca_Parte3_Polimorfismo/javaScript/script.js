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
        console.log("Allloooou")
    }

    dormir() {
        console.log("Dormir")
    }
}

class Cao extends Animal { // Subclase - filha
    constructor() {
        super()
        this.tamanhoOrelha = 0
    }

    correr() {
        super.correr()
        console.log("O cão corre")
    }

    latir() {
        console.log("Latir")
    }
}

class Passaro extends Animal {// Subclase - filha
  correr() {
    super.correr();
    console.log("O passaro corre");
  }

  voar() {
    console.log("Voar");
  }
}

class Papagaio extends Passaro {
    falar() {
        console.log("Papagaio fala");
    }
}

// Instancia
const cao = new Cao();
cao.correr();
cao.dormir();
cao.latir();
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)

const passaro = new Passaro();
passaro.correr();
passaro.dormir();
passaro.voar();
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)

const papagaio = new Papagaio()
papagaio.correr()
papagaio.dormir()
papagaio.voar()
papagaio.falar()
