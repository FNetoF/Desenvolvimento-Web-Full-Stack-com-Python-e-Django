# Métodos
#cadastro email: ja@gmail.com senha: 1234

class Usuario:
    def __init__(self, email, senha):
        self.email = email
        self.senha = senha
        self.enderecos = []

    def __str__(self):
        return f'email: {self.email}, senha: {self.senha}'

    def __iter__(self):
        return self.enderecos.__iter__()

    def _validar(self):
        email_c = 'ja@gmail.com'
        senha_c = '1234'

        if email_c == self.email and senha_c == self.senha:
            print('Usuario validado')
        else:
            print('Email ou senha incorretos')

    def logar(self):
        self._validar()
        print('enviar para a tela principal')

    def forca_senha(self):
        if len(self.senha) >= 5:
            return True
        else:
            return False

    # def cadastrar_endereco(self, endereco1, endereco2):
    #     print(f'Endereços: {endereco1}, {endereco2}')

    def cadastrar_endereco(self, *enderecos):
        for endereco in enderecos:
            print(f"endereço: {endereco}")


usuario = Usuario('ja@gmail.com', '12345') # caixa de texto
usuario.enderecos = ['Rua 1', 'Rua 2', 'Rua 3']

for endereco in usuario:
    print(f"endereço: {endereco}")

print(usuario)

#print(usuario)
#usuario.logar()
# if usuario.forca_senha():
#     print('Senha Forte')
# else:
#     print('senha fraca')
#lista = ['Rua 1', 'Rua 2']
#usuario.cadastrar_endereco(*lista)
#usuario.cadastrar_endereco('Rua 1', 'Rua 2')
