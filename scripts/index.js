function changeSlide(element) {
    const first = document.getElementById("depdiv").firstElementChild;
    const active = document.getElementById("ativado");
    const last = document.getElementById("depdiv").lastElementChild;

    let nextActive;
    if (element.classList.contains("avancar")) {
        nextActive = active.nextElementSibling || first;
    }
    else if (element.classList.contains("voltar")) {
        nextActive = active.previousElementSibling || last;
    } 

    nextActive.id = "ativado";
    active.id = "";
}