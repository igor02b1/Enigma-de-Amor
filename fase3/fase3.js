let respostaMensagem = document.getElementById("caixa-resposta-1");

let respostaBotao = document.getElementById("check-resposta");

respostaBotao.addEventListener("click", () => {
    if(respostaMensagem.value == "15/12/2022"){
        alert("resposta certa");
        window.location.href = '../fase4/fase4.html';
    } else {
        alert("resposta errada, talvez voce esteja errado o formato dd/mm/yyyy");
    }
})