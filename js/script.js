const TEMPO = 60000;
const content = document.querySelector("#hiddenContent");
const disclosure = document.querySelector("#hiddenDisclosure");
const buyBtn = document.querySelector("#buyButton")

function showContent(){
    content.classList.remove("d-none");
    buyBtn.classList.remove("d-none");
    disclosure.classList.add("d-none");
}

setTimeout(showContent,TEMPO);

