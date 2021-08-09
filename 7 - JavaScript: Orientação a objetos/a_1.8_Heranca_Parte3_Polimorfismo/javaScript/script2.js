// Herança - Reutilização e manuteção
// Classe: Cao - Passaro

class Animal { // SuperClasse - pai
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
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
    constructor(cor, tamanho, peso, tamanhoOrelha) {
        super(cor, tamanho, peso)
        this.tamanhoOrelha = tamanhoOrelha;
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
  constructor(cor, tamanho, peso) {
    super(cor, tamanho, peso)
  }

  correr() {
    super.correr();
    console.log("O passaro corre");
  }

  voar() {
    console.log("Voar");
  }
}

class Papagaio extends Passaro {
    constructor(cor, tamanho, peso, saberFalar) {
    super(cor, tamanho, peso)
    this.saberFalar = saberFalar;
  }

    falar() {
        console.log("Papagaio fala");
    }
}

// Instancia
const animal = new Animal("Amarelo", 60, 3)
console.log(`ANIMAL:`)
console.log(`Cor: ${animal.cor}`)
console.log(`Tamanho: ${animal.tamanho} cm`)
console.log(`Peso: ${animal.peso} kg`);
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)

const cao = new Cao("Branco", 47,  25, 7)
console.log(`\nCÃO:`);
console.log(`Cor: ${cao.cor}`)
console.log(`Tamanho: ${cao.tamanho} cm`)
console.log(`Peso: ${cao.peso} kg`)
console.log(`Tamanho da orelha: ${cao.tamanhoOrelha}`)
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)

const passaro = new Passaro("Vermelho", 36,  11)
console.log(`\nPASSARO:`);
console.log(`Cor: ${passaro.cor}`)
console.log(`Tamanho: ${passaro.tamanho} cm`)
console.log(`Peso: ${passaro.peso} kg`)
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)

const papagaio = new Papagaio("Verde", 20, 1, true);
console.log(`\nPAPAGAIO:`);
console.log(`Cor: ${papagaio.cor}`);
console.log(`Tamanho: ${papagaio.tamanho} cm`)
console.log(`Peso: ${papagaio.peso} kg`)
console.log(`Papagaio sabe falar: ${papagaio.saberFalar}`)
papagaio.falar()
