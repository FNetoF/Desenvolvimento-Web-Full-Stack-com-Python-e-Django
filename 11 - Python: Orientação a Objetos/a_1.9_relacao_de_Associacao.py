"""
Relação de Associação -> É uma das relações mais comuns
entre dois objetos, acontece quando um objeto "utiliza"
outro, porém, sem que eles dependam um do outro
"""

class Pessoa:
    def __init__(self, nome):
        self.nome = nome
        self.video_game = None

    def andar(self):
        print(f'Jogador({self.nome}) andando')

class VideoGame:
    def __init__(self, nome):
        self.nome = nome

    def rodar_jogo(self):
        print(f'Rodar jogo no {self.nome}')


pessoa = Pessoa('Jamilton')
#videogame = VideoGame('Xbox')

#pessoa.video_game = videogame
#pessoa.video_game.rodar_jogo()

pessoa.andar()






















# teste = ''
# teste3 = None #null
# del teste3
# print(teste3)
# if teste3 == teste:
#     print('Verdadeiro')
# else:
#     print('falso')
#print(teste)
