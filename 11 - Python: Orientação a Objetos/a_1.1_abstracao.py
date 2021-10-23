"""
Pilar1 - Abstração (Venda de peças e Uber)
Modelo, Entidade, Identidade
Características e ações
"""
class Carro:
    def __init__(self, modelo, cor, placa):
        self.modelo = modelo
        self.cor = cor
        self.placa = placa

    def exibir_local_atual(self):
        print('Carro está na rua tal número 10')


carro = Carro("gol", "prata", "JHM-6854")

#carro_jamilton = Carro("golf", "preto", "RTM-2345")

# Loja Virtual
class Produto:
    # roupas
    # def __init__(self, tamanho, cor, preco):
    #     self.tamanho = tamanho
    #     self.cor = cor
    #     self.preco = preco

    # eletrônicos
    def __init__(self, largura, altura, cor, preco):
        self.largura = largura
        self.altura = altura
        self.cor = cor
        self.preco = preco

#produto = Produto("G", "preto", 25.60)
produto = Produto("50cm", "80cm", "preto", 25.60)
