function processar(callbackSucesso, callbackErro) {
    /**
     *  Ações
     */
    let resultadoProcessamento = false

    if(resultadoProcessamento ) {
        callbackSucesso()
    }
    else {
        callbackErro()
    }
}

const salvarResultado = function() {
   console.log("Salvar Resultado")
}

const cancelar = function() {
   console.log("Erro")
}

processar(salvarResultado, cancelar)
