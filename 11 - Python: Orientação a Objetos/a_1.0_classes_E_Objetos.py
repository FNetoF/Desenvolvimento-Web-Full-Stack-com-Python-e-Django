"""
notação Pascal Case ex: ContaBancaria
notação Camel Case ex: contaBancaria
notação Snake Case ex: conta_bancaria
"""
class Conta:
    def __init__(self, nome, saldo):
        self.nome = nome
        self.saldo = saldo


    def depositar(self, valor):
        self.saldo += valor

    def sacar(self, valor):
        self.saldo -= valor


conta = Conta("Jamilton", 1000)
#conta.depositar(100)
conta.sacar(100)


print(f'nome: {conta.nome} - saldo: R$ {conta.saldo}')


conta_maria = Conta("Maria", 800)
conta.depositar(500)
conta_maria.sacar(200)


print(f'nome: {conta_maria.nome} - saldo: R$ {conta_maria.saldo}')
