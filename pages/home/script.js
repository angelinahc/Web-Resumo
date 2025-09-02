const search = document.getElementById("input-procurar")
const button = document.getElementById("botao-input")
const listaCard = document.getElementById("lista-de-cards")

let pesquisa = ""

button.addEventListener("click", () => {
    pesquisa = search.value
    getData()
})

const getData = async () => {
    const response = await(await(fetch(`https://openlibrary.org/search.json?title=${pesquisa.replace(/ /g, "+")}`))).json()
    console.log(response)

    const docs = response.docs
    listaCard.innerHTML = ""
    docs.forEach(livro => {
        const div = document.createElement("div")
        div.className = "card"
        div.innerHTML = `
            <img class="image-card" src="../../global/images/cachorro-fofo.jpg" alt="cachorro">
            <div class="texto-card">${livro.title}</div>
        `
        listaCard.appendChild(div)
    });
}