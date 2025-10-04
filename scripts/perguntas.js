function trocaSeta(id) {
    const seta = document.getElementById(id)
    console.log(seta.innerHTML)
    if (seta.innerHTML === "⮞") {
        seta.innerHTML = "⮟"
    }
    else {
        seta.innerHTML = "⮞"
    }
}
function respostaWidth() {
    const sections = document.getElementsByTagName('section')
    for (let section of sections) {
        let pergunta = section.getElementsByTagName('h2').item(0)
        let resposta = section.getElementsByTagName('p').item(0)

        resposta.style.maxWidth = pergunta.offsetWidth + 'px'
    }
}