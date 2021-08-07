function gerarFrasesMotivacional() {
    const frases = [
      "Nós temos de nos forçar a aprender o tempo todo. Temos dois ouvidos e uma boca, para ouvirmos mais do que falamos. Não se aprende sem ouvir.",
      "A causa da derrota, não está nos obstáculos, ou no rigor das circunstâncias, está na falta de determinação e desistência da própria pessoa.",
      "Mudar é difícil mas é possível.",
      "Se não houver felicidade, negócio vira uma tortura.",
      "Não tenha receio de desistir do bom para correr atrás do ótimo.",
      "Sucesso? Eu não sei o que exatamente isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa. Para mim, o sucesso é ter paz interior.",
      "Seja muito bom, que eles não vão ter como ignorar você.",
      "Daqui a vinte anos, você não vai se arrepender das coisas que fez, mas das que deixou de fazer. Por isso, veleje longe do seu porto seguro. Pegue os ventos. Explore. Sonhe. Descubra.",
      "Para ser bem sucedido, o desejo pelo sucesso deve ser maior que o medo de falhar.",
      "Não sei qual é o segredo do sucesso, mas o segredo do fracasso é tentar agradar a todo mundo."
    ]
    const numeroAleatorio = Math.floor(Math.random() * 10)
    const frase = frases[numeroAleatorio]

    document.getElementById('frase'). innerHTML = frase
}