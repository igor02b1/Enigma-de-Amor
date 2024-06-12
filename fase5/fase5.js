let respostaMensagem = document.getElementById("caixa-resposta-1");

let respostaBotao = document.getElementById("check-resposta");

respostaBotao.addEventListener("click", () => {
    if(respostaMensagem.value == "memorias"){
        alert("você completou todas as pessoas de memórias que faltavam. parabéns e obrigado pela ajuda");
        window.location.href = '../final.html';
    } else {
        alert("resposta errada.");
    }
})