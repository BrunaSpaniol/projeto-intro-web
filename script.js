const filmesBrasileiros = []

const filme1 = {
    titulo: "Central do Brasil",
    Ano: 1998,
    IMDB: 8.0,
    indicadoOscar: true,
    premiosInternacionais: ["Globo de Ouro", "Bafta", "Festival de Berlim"],
    imagemFilme:"./media/centralDoBrasil.jpg"
}


const filme2 = {
    titulo: "Cidade de Deus",
    Ano: 2002,
    IMDB: 8.6,
    indicadoOscar: true,
    premiosInternacionais: ["Festival de Havana", "Bafta", "Writers Guild of America"],
    imagemFilme:"./media/CidadedeDeus.jpg"
}


const filme3 = {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    IMDB: 8.6,
    indicadoOscar: false,
    premiosInternacionais: ["Miami Brazilian Film Festival", "Viña del Mar Film Festival"]
}

const filme4 = {
    titulo: "Tropa de Elite",
    ano: 2007,
    IMDB: 8.0,
    indicadoOscar: false,
    premiosInternacionais: ["Festival de Berlim", "Festival Hola Lisboa"]
}

const filme5 = {
    titulo: "O Pagador de Promessas",
    ano: 1962,
    IMDB: 8.3,
    indicadoOscar: true,
    premiosInternacionais: ["Cannes", "Festival Cartagena", "San Francisco International Film Festival"],
    imagemFilme:"./media/PAGADOR.jpg"
}

// Média de notas no IMDB dos filmes brasileiros

const mediaIMDB = (filme1.IMDB + filme2.IMDB + filme3.IMDB + filme4.IMDB + filme5.IMDB) / 5;
console.log("Média da nota IMDB", mediaIMDB);

//Verificando se todos os filmes foram indicados ao Oscar:

const indicadosOscar = (filme1.indicadoOscar && filme2.indicadoOscar && filme3.indicadoOscar && filme4.indicadoOscar && filme5.indicadoOscar);
console.log("Todos os filmes foram indicados ao Oscar? ", indicadosOscar)


// delação da função que insere os objetos no array com push e verifica quais foram indicados ao Oscar:

const verificaOscar = (objeto, array)=>{

    if(objeto.indicadoOscar){
        return array.push(objeto) 
    } else{
        alert("O objeto não foi adicionado ao array porque a condição booleana é false")
    }
}

// Chamando a função para verificar se objeto (filme) foi indicado ao Oscar.
verificaOscar(filme1, filmesBrasileiros)
verificaOscar(filme2, filmesBrasileiros)
verificaOscar(filme3, filmesBrasileiros)
verificaOscar(filme4, filmesBrasileiros)
verificaOscar(filme5, filmesBrasileiros)

console.log(filmesBrasileiros)

    
//Criando relatório com nome em maiúsculo e com todas as propriedades de cada objeto guardadas em uma única string:

    for(i in filmesBrasileiros){
         let stringsFilmes = `Filme: ${filmesBrasileiros[i].titulo.toUpperCase()}\n Ano: ${filmesBrasileiros[i].ano}\n IMDB: ${filmesBrasileiros[i].IMDB}\n Foi indicado ao Oscar? ${filmesBrasileiros[i].indicadoOscar}\n Prêmios Internacionais: ${filmesBrasileiros[i].premiosInternacionais}\n`
         console.log(stringsFilmes)




// Colocando os Títulos em Maiúsculos:

for (nome in filmesBrasileiros) {
    filmesBrasileiros[nome].titulo = filmesBrasileiros[nome].titulo.toUpperCase()
}

// faça um laço que guarde todos os valores da propriedade array do objeto em uma mesma string


const premios = (objeto) => {
    let stringPremios = ""
    for (i of objeto.premiosInternacionais) {
        stringPremios += i + ","
    }
    return stringPremios
}

// Concatena o array de prêmios em cada objeto.

for (i in filmesBrasileiros) {
    filmesBrasileiros[i].premiosInternacionais = premios(filmesBrasileiros[i])
}

// Imprime o resultado:

for (i in filmesBrasileiros) {
    console.log(filmesBrasileiros[i])
}

// Criando uma função que junte o array de string em apenas uma string:

const concatenaString = (objeto) => {
    var relatorio = ""
    for (i in objeto) {

        relatorio += i + ":" + objeto[i] + "\n"

    }
    return relatorio

}

// refatorar para deixar assim:
// const relatorio = (obj) => {
//     let str = Nome: ${obj.nome.toUpperCase()}\nIdade: ${obj.idade}\nAinda está vivo? ${obj.aindaVivo}\nPrincipais Jutsus: ${obj.principaisJutsus}
//     console.log(str)
// }

for (i of filmesBrasileiros){
    console.log(concatenaString(i))
}



// Esta função deve receber um array de objetos e retornar um objeto que deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.


const busca = (arrayObjeto, string) => {

    string = string.toUpperCase().trim()
    
    const buscaString = arrayObjeto.filter((arrayObjeto) =>{
        return arrayObjeto.titulo === string
     })

    if (buscaString.length === 0){
        return alert("Nenhum item foi encontrado!")
    }else{
        return buscaString[0]
    }

}

console.log(busca(filmesBrasileiros, "Carandirú"))