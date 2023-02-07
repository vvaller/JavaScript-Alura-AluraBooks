function aplicarDescontos(livros) {
    const desconto = 0.1
    livrosComDesconto = livros.map(livros => {
        return { ...livros, preco: livros.preco - (livros.preco * desconto)};
    })
    return livrosComDesconto
}