"""
Um módulo é um arquivo contendo definições
e instruções Python que podem ser importados para
utilização de seus recursos
https://docs.python.org/pt-br/3/tutorial/modules.html
"""
import operacoes
from operacoes import somar, subtrair, nome_empresa
from operacoes import subtrair, nome_empresa

print(operacoes.subtrair(10, 2))
print(somar(1, 3))
print(subtrair(1, 3))
print(nome_empresa)
print(__name__)












