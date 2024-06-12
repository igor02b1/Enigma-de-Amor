let respostaMensagem = document.getElementById("caixa-resposta-1");

let respostaBotao = document.getElementById("check-resposta");

respostaBotao.addEventListener("click", () => {
    if(respostaMensagem.value == "pedra dos namorados"){
        alert("resposta certa");
        window.location.href = '../fase2/fase2.html';
    } else {
        alert("resposta errada.");
    }
})
