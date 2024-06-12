let respostaMensagem = document.getElementById("caixa-resposta-1");

let respostaBotao = document.getElementById("check-resposta");

respostaBotao.addEventListener("click", () => {
    if(respostaMensagem.value == "eu me lembro"){
        alert("resposta certa");
        window.location.href = '../fase3/fase3.html';
    } else {
        alert("resposta errada, talvez você precise CLAREAR sua resposta.");
    }
})