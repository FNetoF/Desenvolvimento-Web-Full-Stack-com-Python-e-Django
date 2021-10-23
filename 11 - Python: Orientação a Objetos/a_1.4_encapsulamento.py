"""
Pilar2 - Encapsulamento
"""


class Filtro:
    def __init__(self, imagem):
        self.imagem = imagem

    def preto_e_branco(self):
        print(f'{self.imagem} com filtro preto e branco')

    def foto_envelhecida(self):
        print(f'{self.imagem} com filtro envelhecido')
        print(f'Também com efeito amarelado')


# filtro = Filtro('foto_jamilton')
# filtro.foto_envelhecida()


# Controle de acesso e Getter e Setters
class Conta:
    def __init__(self, saldo):
        self._numero = 0
        self._saldo = saldo

    @property
    def numero(self):
        return self._numero

    @numero.setter
    def numero(self, valor):
        if valor > 0:
            self._numero = valor
        else:
            print('Número inválido')

    def depositar(self, valor):
        self._saldo += valor

    def sacar(self, valor):
        self._saldo -= valor


conta = Conta(800)
conta.numero = 10589
print(conta.numero)
# conta.sacar(100)
# conta.depositar(200)

# print(conta._saldo)
