let respostaMensagem = document.getElementById("caixa-resposta-1");

let respostaBotao = document.getElementById("check-resposta");

respostaBotao.addEventListener("click", () => {
    if(respostaMensagem.value == "familia"){
        alert("resposta certa");
        window.location.href = '../fase5/fase5.html';
    } else {
        alert("resposta errada.");
    }
})