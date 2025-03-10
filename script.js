const filmesBrasileiros = []

const filme1 = {
    titulo: "Central do Brasil",
    ano: 1998,
    IMDB: 8.0,
    indicadoOscar: true,
    premiosInternacionais: ["Globo de Ouro", "Bafta", "Festival de Berlim"],
    imagemFilme:"./media/centralDoBrasilSemFundo.png",
    imagemBg: "./media/centralDoBrasilSemFundo3.png",
    linkTitulo: "https://pt.wikipedia.org/wiki/Central_do_Brasil_(filme)",
    posicao:1
}


const filme2 = {
    titulo: "Cidade de Deus",
    ano: 2002,
    IMDB: 8.6,
    indicadoOscar: true,
    premiosInternacionais: ["Festival de Havana", "Bafta", "Writers Guild of America"],
    imagemFilme:"./media/cidadedeDeusSemFundo.png",
    imagemBg: "./media/cidadedeDeusSemFundo2.png",
    linkTitulo:"https://pt.wikipedia.org/wiki/Cidade_de_Deus_(filme)",
    posicao:2
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
    imagemFilme:"./media/pagadorDePromessasSemFundo.png",
    imagemBg: "./media/pagadorDePromessasSemFundo2.png",
    linkTitulo: "https://pt.wikipedia.org/wiki/O_Pagador_de_Promessas",
    posicao:3
}

// Média de notas no IMDB dos filmes brasileiros

const mediaIMDB = (filme1.IMDB + filme2.IMDB + filme3.IMDB + filme4.IMDB + filme5.IMDB) / 5;
console.log("Média da nota IMDB", mediaIMDB);

//Verificando se todos os filmes foram indicados ao Oscar:

const indicadosOscar = (filme1.indicadoOscar && filme2.indicadoOscar && filme3.indicadoOscar && filme4.indicadoOscar && filme5.indicadoOscar);
console.log("Todos os filmes foram indicados ao Oscar? ", indicadosOscar)


// declaração da função que insere os objetos no array com push e verifica quais foram indicados ao Oscar:

const verificaOscar = (objeto, array)=>{

    if(objeto.indicadoOscar){
        return array.push(objeto) 
    } else{
        alert("O objeto não foi adicionado ao array porque a condição booleana é false")
    }
}

// Chamando a função para verificar se objeto (filme) foi indicado ao Oscar.
const filmes = [filme1, filme2, filme3, filme4, filme5];
for(i of filmes){
    verificaOscar(i, filmesBrasileiros)
}

console.log(filmesBrasileiros)

    
//Criando relatório com nome em maiúsculo e com todas as propriedades de cada objeto guardadas em uma única string:

    for(i in filmesBrasileiros){
         let stringsFilmes = `Filme: ${filmesBrasileiros[i].titulo.toUpperCase()}\nAno: ${filmesBrasileiros[i].ano}\nIMDB: ${filmesBrasileiros[i].IMDB}\nFoi indicado ao Oscar? ${filmesBrasileiros[i].indicadoOscar}\nPrêmios Internacionais: ${filmesBrasileiros[i].premiosInternacionais}\n`
         console.log(stringsFilmes)
    }


// Criando uma função que recebe um objeto e retorna o relatório de cada objeto

 const relatorio = (objeto) => {
    let stringRelatorio = `Filme: ${objeto.titulo.toUpperCase()}\nAno: ${objeto.ano}\nIMDB: ${objeto.IMDB}\nIndicado ao Oscar? ${objeto.indicadoOscar}\nPrêmios Internacionais: ${objeto.premiosInternacionais}`
        return stringRelatorio
 }

for (i of filmesBrasileiros){
    console.log(relatorio(i))
}


// Esta função recebe um array de objetos e retorna um objeto que deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.


const busca = (arrayObjeto, string) => {

    string = string.toUpperCase().trim()
    
    // como apenas o relatório está em maiúsculo o título tive que colocar tb na propriedade do objeto nessa função.

    const buscaString = arrayObjeto.filter((arrayObjeto) =>{
        return arrayObjeto.titulo.toUpperCase() === string
     })

    if (buscaString.length > 0){
        return buscaString[0]
        
    }else{
        alert("Nenhum item foi encontrado!")
    }
    
}

// Alterado o código para que a tela de lista de itens crie os elementos da lista através de manipulação do DOM.

const main = document.getElementById("main");
const div = document.createElement("div");
div.setAttribute("id", "containerAllSection");


//função que carrega os cards na home
main.addEventListener(onload, addItem(div, main))


// A função que cria as sections:

function addItem(div, main){

    for(i of filmesBrasileiros){
        imprimeElemento(i, div)
    }
    main.appendChild(div)
    main.insertAdjacentElement("beforeend", div)

}



// A função recebe um objeto e a div container de sections e imprime os cards na tela.

function imprimeElemento(objeto, div){
        const divSection = document.createElement("div");
        divSection.setAttribute("class", "containerSection")
        divSection.setAttribute("id", `containerSection${objeto.posicao}`);
        divSection.style =`background-image:url(${objeto.imagemBg})`;
        const section = document.createElement("section");
        section.setAttribute("id", `section${objeto.posicao}`);
        section.innerHTML += `<img id="imagem${objeto.posicao}" src= ${objeto.imagemFilme} alt="imagens do filme"${objeto.titulo}"/>`
        let ul = document.createElement("ul");
        ul.innerHTML += `<li><a id="titulo" href=${objeto.linkTitulo} target="_blank">${objeto.titulo}</a></li>`
        ul.innerHTML += `<li id="textoLi">Ano: ${objeto.ano}</li>`
        ul.innerHTML += `<li id="textoLi">IMDB: ${objeto.IMDB}</li>`
        ul.innerHTML += `<li id="textoLi">Indicado ao Oscar</li>`
        ul.innerHTML +=`<li id="textoLi"> Prêmios Internacionais: ${i.premiosInternacionais.join(`, `)} </li>`
        section.appendChild(ul);
        section.insertAdjacentElement("beforeend", ul)
        divSection.appendChild(section)
        div.appendChild(divSection)
        div.insertAdjacentElement("beforeend", divSection)
}


// A função recebe o input, remove a div das sections e imprime o filme pesquisado.

function pesquisa(event){
    event.preventDefault()
    const main = document.querySelector("main")
    const input = document.querySelector('#buscafilme')
    const string = input.value
    if(string.length === 0){
        alert("Digite alguma coisa para realizar a busca")
        hideAlert()
    }
    document.querySelector("#containerAllSection").remove()
    const objeto = busca(filmesBrasileiros, string)
    const div = document.createElement("div");
    div.setAttribute("class", "containerBusca"); 
    div.setAttribute("id", "containerAllSection")
    imprimeElemento(objeto, div)
    main.appendChild(div)
    main.insertAdjacentElement("beforeend", div)
}

//A função de retorno à página inicial?

function paginaInicial(event){
    event.preventDefault()  
    const main = document.querySelector("main")
    document.querySelector("#containerAllSection").remove()
    const div = document.createElement("div"); 
    div.setAttribute("id", "containerAllSection")
    addItem(div, main)
}