const TEMPO = 60000;
const content = document.querySelector("#hiddenContent");

function showContent(){
    content.classList.remove("d-none");
}

setTimeout(showContent,TEMPO);

