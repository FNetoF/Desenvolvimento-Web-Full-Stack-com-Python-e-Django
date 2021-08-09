//  Encapsulamento, modificadores de acesso e getters e setter

// private, protected e public

class ContaBancaria {
  constructor() {
    this._numeroConta = 80
    this._saldo = 0
  }

  get saldo() { 
    return this._saldo
  }

  set saldo(novoSaldo) {
    if (novoSaldo > 0) {
      this._saldo = novoSaldo;
    }
  }

  get numeroConta() {
    // Verificar se o usuario está logado 
    return "Número: " +  this._numeroConta
  }

  set numeroConta(numeroConta) {
    if(numeroConta > 0) {
      this._numeroConta = numeroConta
    }
  }

  sacar(valorSaque) {
    this._saldo -= valorSaque
  }

  depositar() {
    this._saldo += valorSaque;
  }
}

const conta = new ContaBancaria()
conta.saldo = 500
conta.sacar(50) // 450
conta.depositar(100) // 550

console.log(conta.saldo)
