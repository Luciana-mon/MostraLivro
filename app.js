const livros = require('./database')
const readline = require('readline-sync')

const entradainicial = readline.question('Deseja buscar um livro? S/N ')

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis: ')
    console.log('Produtividade', '/Historia Brasileira', '/Tecnologia', '/Terror', '/Ensinamento biblico', '/Autoajuda')

    const entradaCategoria = readline.question('Qual Categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esse são todos os livros disponiveis:')
    console.table(livrosOrdenados)

}
